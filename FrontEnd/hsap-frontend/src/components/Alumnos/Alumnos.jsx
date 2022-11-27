import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import AlumnoItem from "./AlumnoItem";
import GetAlumnos from "../../firebase/Alumnos/GetAlumnos";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import "./Alumnos.css";
import iconoAgregar from "../../assets/img/iconoAgregar.svg";
import AddAlumno from "../../firebase/Alumnos/AddAlumno";

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState(null);

  var nombre = "";
  var casa = "";
  var resultado = 0;

  async function cargarAlumnos() {
    const result = await new GetAlumnos().send();
    setAlumnos(result);
  }

  useEffect(() => {
    if (alumnos === null) {
      cargarAlumnos();
    }
  });

  const items = (alumnos === null ? [] : alumnos).map((alumno) => (
    <AlumnoItem alumno={alumno} />
  ));

  async function agregarAlumno() {
    if (alumnos === null) {
      cargarAlumnos();
    } else {
      swal({
        title: "Agregar alumno",
        content: {
          element: "div",
          attributes: {
            innerHTML: `
                <input class="inputForm" oninput="window.changeNombre(this.value)" placeholder="Nombre Completo"/>
                <br/>
                <select class="selectForm" name="casa" id="casa" placeholder="Casa" onchange="window.changeCasa(this.value)">
                  <option class="optionForm" selected disabled hidden="">Casa</option>
                  <option value="Gryffindor">Gryffindor</option>
                  <option value="Hufflepuff">Hufflepuff</option>
                  <option value="Ravenclaw">Ravenclaw</option>
                  <option value="Slytherin">Slytherin</option>
                </select>`,
          },
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
        allowOutsideClick: false,
        buttons: {
          confirm: { text: "Ok", className: "btnOk" },
        },
      }).then(async function() {
        if ((nombre !== "") & (casa !== "")) {
          resultado = await new AddAlumno().send(
            Math.floor(Math.random() * 10000 + 1).toString(),
            nombre,
            casa
          );

          if (resultado) {
            swal({
              title: "Alumno Agregado",
              text: "Se agrego correctamente",
              buttons: {
                confirm: { text: "Ok", className: "btnOk" },
              },
            });
            cargarAlumnos();
          }

          if (!resultado) console.log("no se agrego");

          if (resultado === 3) console.log("hubo error");
        } else {
          if (!resultado) console.log("no se agrego");
        }
      });

      window.changeNombre = function(value) {
        nombre = value;
      };

      window.changeCasa = function(value) {
        casa = value;
      };
    }
  }

  return (
    <div className="fondo">
      <div className="align-end">
        <button className="btn-agregar" onClick={agregarAlumno}>
          Agregar <img className="iconoAgregar" src={iconoAgregar} alt="" />
        </button>
      </div>
      <div className="divMaterias">
        <Table className="tablaMaterias" bordered>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre Completo</th>
              <th>Casa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    </div>
  );
}
