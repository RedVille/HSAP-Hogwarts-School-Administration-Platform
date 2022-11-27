import React from "react";
import { Row } from "react-bootstrap";
import swal from "sweetalert";
import "./Alumnos.css";
import editar from "../../assets/img/editar.svg";
import eliminar from "../../assets/img/eliminar.svg";
import DeleteAlumno from "../../firebase/Alumnos/DeleteAlumno";
import UpdateAlumno from "../../firebase/Alumnos/UpdateAlumno";

export default function AlumnoItem(props) {
  const alumno = props.alumno;
  const cargarAlumnos = props.cargarAlumnos;

  function editarAlumno() {
    console.log(alumno);

    swal({
      title: "Agregar alumno",
      content: {
        element: "div",
        attributes: {
          innerHTML: `
              <input class="inputForm" id="nombre" oninput="window.changeNombre(this.value)" placeholder="Nombre Completo"/>
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
      await new UpdateAlumno().send(
        alumno.matricula,
        alumno.nombre,
        alumno.casa
      );

      cargarAlumnos();

      swal({
        title: "Alumno Editado",
        buttons: {
          confirm: { text: "Ok", className: "btnOk" },
        },
      });
    });

    //Llenar formulario
    document.getElementById("casa").value = alumno.casa;
    document.getElementById("nombre").value = alumno.nombre;

    window.changeNombre = function(value) {
      alumno.nombre = value;
    };

    window.changeCasa = function(value) {
      alumno.casa = value;
    };
  }

  async function eliminarAlumno() {
    swal({
      title: "Eliminar Alumno",
      text: "¿Seguro que desea eliminar al alumno con matrícula " + alumno.matricula + "?",
      buttons: {
        confirm: { text: "Sí", className: "btnOk" },
        cancel: "No",
      },
    }).then(async function(resultado) {
      if (resultado) {
        await new DeleteAlumno().send(alumno.matricula);

        cargarAlumnos();
        
        swal({
          title: "Alumno Eliminado",
          buttons: { confirm: { text: "Ok", className: "btnOk" } },
        });
      }
    });
  }

  return (
    <tr>
      <td>{alumno.matricula}</td>
      <td>{alumno.nombre}</td>
      <td>{alumno.casa}</td>
      <td>
        <Row className="text-center">
          <div className="div-icono" onClick={editarAlumno}>
            <img className="icono" src={editar} alt="" />
          </div>
          <div className="div-icono eliminar" onClick={eliminarAlumno}>
            <img className="icono" src={eliminar} />
          </div>
        </Row>
      </td>
    </tr>
  );
}
