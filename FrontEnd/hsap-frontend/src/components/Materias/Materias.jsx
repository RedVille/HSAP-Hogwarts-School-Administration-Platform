import React, { useState, useEffect } from "react";
import MateriaItem from "./MateriaItem";
import GetMaterias from "../../firebase/Materias/GetMaterias";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import "./Materias.css";
import iconoAgregar from "../../assets/img/iconoAgregar.svg";
import AddMateria from "../../firebase/Materias/AddMateria";

export default function Materias() {
  const [materias, setMaterias] = useState(null);

  var nombre = "";
  var resultado = 0;

  async function cargarMaterias() {
    const result = await new GetMaterias().send();
    setMaterias(result);
  }

  useEffect(() => {
    if (materias === null) {
      cargarMaterias();
    }
  });

  const items = (materias === null ? [] : materias).map((materia) => (
    <MateriaItem materia={materia} cargarMaterias={cargarMaterias} />
  ));

  async function agregarMateria() {
    if (materias === null) {
      cargarMaterias();
    } else {
      swal({
        title: "Agregar Materia",
        content: {
          element: "div",
          attributes: {
            innerHTML: `<input class="inputForm" oninput="window.changeNombre(this.value)" placeholder="Nombre Completo"/>`,
          },
        },
        buttons: {
          confirm: { text: "Ok", className: "btnOk" },
        },
      }).then(async function() {
        if (nombre !== "") {
          resultado = await new AddMateria().send(
            Math.floor(Math.random() * 10000 + 1).toString(), nombre
          );

          if (resultado) {
            swal({
              title: "Materia Agregada",
              buttons: {
                confirm: { text: "Ok", className: "btnOk" },
              },
            });

            cargarMaterias();
          }

          if (!resultado) console.log("Ya existe matrícula");

          if (resultado === 3) console.log("Hubo error");
        } else {
          if (!resultado) console.log("Campos vacios");
        }
      });
    }

    window.changeNombre = function(value) {
      nombre = value;
    };
  }

  return (
    <div className="fondo">
      <div className="align-end">
        <button className="btn-agregar" onClick={agregarMateria}>Agregar 
          <img className="iconoAgregar" src={iconoAgregar} alt="" />
        </button>
      </div>
      <div className="divMaterias">
        <Table className="tablaMaterias" bordered>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    </div>
  );
}
