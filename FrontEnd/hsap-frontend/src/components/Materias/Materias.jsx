import React from "react";
import { Table, Row } from "react-bootstrap";
import "./Materias.css";
import iconoAgregar from "../../assets/img/iconoAgregar.svg";
import editar from "../../assets/img/editar.svg";
import asignar from "../../assets/img/asignar.svg";
import calificaciones from "../../assets/img/calificaciones.svg";
import eliminar from "../../assets/img/eliminar.svg";

export default function Materias() {
  return (
    <div className="fondo">
      <div className="align-end">
        {" "}
        <button className="btn-agregar">Agregar <img className="iconoAgregar" src={iconoAgregar} alt="" /></button>
      </div>
      <div className="divMaterias">
      <Table className="tablaMaterias" bordered >
      <thead>
        <tr>
          <th>Matrícula</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        <tr>
          <td>00000</td>
          <td>Nombre</td>
          <td>
            <Row className="text-center" >
            <div className="div-icono"><img className="icono" src={editar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={asignar} alt="" /></div>
            <div className="div-icono"><img className="icono" src={calificaciones} alt="" /></div>
            <div className="div-icono eliminar"><img className="icono" src={eliminar} alt="" /></div>
            </Row>
          </td>
        </tr>
        
      </tbody>
    </Table>
      </div>
    </div>
  );
}
