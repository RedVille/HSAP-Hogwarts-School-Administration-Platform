import React from "react";
import { Row } from "react-bootstrap";
import "./Alumnos.css";
import editar from "../../assets/img/editar.svg";
import eliminar from "../../assets/img/eliminar.svg";

export default function AlumnoItem(props) {
    const alumno = props.alumno;

    function editarAlumno() {
    }

    function eliminarAlumno() {
    }
    
    return (
        <tr>
          <td>{alumno.matricula}</td>
          <td>{alumno.nombre}</td>
          <td>{alumno.casa}</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono" onClick={editarAlumno}><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono eliminar" onClick={eliminarAlumno}><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
    );
}