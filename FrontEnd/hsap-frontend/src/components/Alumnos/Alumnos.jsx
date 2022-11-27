import React, { useState, useEffect } from "react";
import AlumnoItem from "./AlumnoItem";
import GetAlumnos from "../../firebase/Alumnos/GetAlumnos";
import { Table } from "react-bootstrap";
import "./Alumnos.css";
import iconoAgregar from "../../assets/img/iconoAgregar.svg";

export default function Alumnos() {
    
    const [alumnos, setAlumnos] = useState(null);

    async function cargarAlumnos() {
        const result = await new GetAlumnos().send();
        setAlumnos(result);
    }

    useEffect(() => {
        if (alumnos === null) {
        cargarAlumnos();
        }
    });
    
    const items = (alumnos === null ? [] : alumnos).map(alumno => (
        <AlumnoItem alumno={alumno} />
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
              <th>Nombre Completo</th>
              <th>Casa</th>
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