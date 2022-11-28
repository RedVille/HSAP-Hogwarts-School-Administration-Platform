import React from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./Materias.css";
import editar from "../../assets/img/editar.svg";
import asignar from "../../assets/img/asignar.svg";
import calificaciones from "../../assets/img/calificaciones.svg";
import eliminar from "../../assets/img/eliminar.svg";

export default function MateriaItem(props) {
    const materia = props.materia;

    function editarMateria() {
    }

    function asignarMateria() {
    }

    function irCalificaciones() {
      routeChange('/calificaciones/' + materia.matricula);
    }

    function eliminarMateria() {
    }

    //Navegación de páginas
    let navigate = useNavigate();
    function routeChange(path) {
      navigate(path);
    }
      
    return (
        <tr>
          <td>{materia.matricula}</td>
          <td>{materia.nombre}</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono" onClick={editarMateria}><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono" onClick={asignarMateria}><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono" onClick={irCalificaciones}><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar" onClick={eliminarMateria}><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
    );
}