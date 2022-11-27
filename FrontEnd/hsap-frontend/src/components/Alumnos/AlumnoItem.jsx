import React from "react";
import { Row } from "react-bootstrap";
import swal from "sweetalert";
import "./Alumnos.css";
import editar from "../../assets/img/editar.svg";
import eliminar from "../../assets/img/eliminar.svg";
import DeleteAlumno from "../../firebase/Alumnos/DeleteAlumno";

export default function AlumnoItem(props) {
  const alumno = props.alumno;
  const cargarAlumnos = props.cargarAlumnos;

  function editarAlumno() {
  }

  async function eliminarAlumno() {
    swal({
      title: "Eliminar Alumno",
      text:"¿Seguro que desea eliminar al alumno con matrícula " + alumno.matricula + "?",
      buttons: {
        confirm: { text: "Sí", className: "btnOk" },
        cancel: "No",
      },
    }).then(async function(resultado) {
      if (resultado) {
        await new DeleteAlumno().send(alumno.matricula);
        cargarAlumnos();
        swal({title: "Alumno Eliminado", buttons: { confirm: { text: "Ok", className: "btnOk" }}});
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
            <img className="icono" src={eliminar}/>
          </div>
        </Row>
      </td>
    </tr>
  );
}
