import React, { useState, useEffect } from "react";
import MateriaItem from "./MateriaItem";
import GetMaterias from "../../firebase/Materias/GetMaterias";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import "./Materias.css";
import { useParams } from "react-router-dom";
import AsignarMateriaItem from "./AsignarMateriaItem";
import GetAlumnos from "../../firebase/Alumnos/GetAlumnos";


export default function AsignarMateria() {
  const { matricula } = useParams();
  const { nombre } = useParams();

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

  const items = (alumnos === null ? [] : alumnos).map((alumno) => (
    
    <AsignarMateriaItem alumno={alumno} materia={matricula} cargarAlumnos={cargarAlumnos} />
  ));


  return (
    <div>
      <h1 className="tituloMateria">{nombre}</h1>
      <div className="divMaterias">
        <Table className="tablaMaterias" bordered>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre Completo</th>
              <th>Casa</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    </div>
  );
}
