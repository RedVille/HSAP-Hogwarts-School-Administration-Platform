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

  function editarAlumno() {}

  async function eliminarAlumno(event) {
    swal({
      title: "Eliminar Alumno",
      text:"¿Seguro que desea eliminar al alumno con matrícula " + event.target.title + "?",
      buttons: {
        confirm: { text: "Sí", className: "btnOk" },
        cancel: "No",
      },
    }).then(async function(resultado) {
      if (resultado) {
        await new DeleteAlumno().send(event.target.title);
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
          <div title={alumno.matricula} className="div-icono eliminar" onClick={eliminarAlumno}>
            <img title={alumno.matricula} className="icono" src={eliminar}/>
          </div>
        </Row>
      </td>
    </tr>
  );
}
