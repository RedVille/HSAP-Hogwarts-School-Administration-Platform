import React, { useState, useEffect } from "react";
import MateriaItem from "./MateriaItem";
import GetMaterias from "../../firebase/Materias/GetMaterias";
import { Table } from "react-bootstrap";
import "./Materias.css";
import iconoAgregar from "../../assets/img/iconoAgregar.svg";

export default function Materias() {

  const [materias, setMaterias] = useState(null);

  async function cargarMaterias() {
    const result = await new GetMaterias().send();
    setMaterias(result);
  }

  useEffect(() => {
    if (materias === null) {
      cargarMaterias();
    }
  });
  
  const items = (materias === null ? [] : materias).map(materia => (
    <MateriaItem materia={materia} />
  ));

  return (
    <div className="fondo">
      <div className="align-end">
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
        {items}    
      </tbody>
    </Table>
      </div>
    </div>
  );
}
