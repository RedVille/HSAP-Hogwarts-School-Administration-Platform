import React from "react";
import { Row } from "react-bootstrap";
import swal from "sweetalert";
import "./Materias.css";
import editar from "../../assets/img/editar.svg";
import asignar from "../../assets/img/asignar.svg";
import calificaciones from "../../assets/img/calificaciones.svg";
import eliminar from "../../assets/img/eliminar.svg";
import UpdateMateria from "../../firebase/Materias/UpdateMateria";

export default function MateriaItem(props) {
    const materia = props.materia;
    const cargarMaterias = props.cargarMaterias;

    function editarMateria() {
      swal({
        title: "Editar Materia",
        content: {
          element: "div",
          attributes: {
            innerHTML: `
                <input class="inputForm" id="nombre" oninput="window.changeNombre(this.value)" placeholder="Nombre Completo"/> `,
          },
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
        allowOutsideClick: false,
        buttons: {
          confirm: { text: "Ok", className: "btnOk" },
        },
      }).then(async function() {
        await new UpdateMateria().send(
          materia.matricula,
          materia.nombre
        );
  
        cargarMaterias();
  
        swal({
          title: "Materia Editada",
          buttons: {
            confirm: { text: "Ok", className: "btnOk" },
          },
        });
      });
  
      //Llenar formulario
      document.getElementById("nombre").value = materia.nombre;
  
      window.changeNombre = function(value) {
        materia.nombre = value;
      };
  
    }

    function asignarMateria() {
    }

    function irCalificaciones() {
    }

    function eliminarMateria() {
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