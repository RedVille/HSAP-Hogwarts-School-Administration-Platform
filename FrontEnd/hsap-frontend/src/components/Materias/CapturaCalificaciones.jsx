import React, { useState, useEffect } from "react";
import CalificacionItem from "./CalificacionItem";
import GetCalificaciones from "../../firebase/Calificaciones/GetCalificaciones";
//import GetAlumno from "../../firebase/Alumnos/GetAlumno"
import { Table } from "react-bootstrap";
import "./Calificaciones.css";

export default function CapturaCalificaciones() {

    const [calificaciones, setCalificaciones] = useState(null);

    var URLactual = window.location.href;
    var Aid = URLactual.split("http://localhost:3000/calificaciones/");
    var id = Aid[1];

    //const [Alumnos, setAlumnos] = useState(null);

    async function cargarCalificaciones() {
        const result = await new GetCalificaciones().send(id);
        setCalificaciones(result);
        //cargarAlumnos(result);
    }

    /*function cargarAlumnos(califs) {
        const listAlumnos = [];
        califs.forEach(m => {
            listAlumnos.push(new GetAlumno().send(m.idAlumno));
        });
        setAlumnos(listAlumnos);
    }*/

    useEffect(() => {
        if (calificaciones === null) {
            cargarCalificaciones();
        }
    });

    const items = (calificaciones === null ? [] : calificaciones).map(calif => (
        <CalificacionItem calificacion={calif} />
    ));

    return (
        <div className="fondo">
            <div className="divMaterias">
                <Table className="tablaMaterias" bordered >
                    <thead>
                        <tr>
                            <th>Matrícula</th>
                            <th>Nombre Completo</th>
                            <th>P1</th>
                            <th>P2</th>
                            <th>P3</th>
                            <th>Final</th>
                            <th></th>
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