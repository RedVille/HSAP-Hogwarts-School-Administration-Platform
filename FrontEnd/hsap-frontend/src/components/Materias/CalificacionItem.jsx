import React, { useState, useEffect } from "react";
import Alumno from "../../classes/Alumno";
import GetAlumno from "../../firebase/Alumnos/GetAlumno";
import UpdateCalificacion from "../../firebase/Calificaciones/UpdateCalificacion"
import swal from "sweetalert";
import "./Calificaciones.css";

export default function CalificacionItem(props) {
    const calificacion = props.calificacion;
    const [alumno, setAlumno] = useState(cargarAlumno());

    //Califs
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [p3, setP3] = useState("");

    function handleP1Change(event) {
        setP1(event.target.value);
    }
    function handleP2Change(event) {
        setP2(event.target.value);
    }
    function handleP3Change(event) {
        setP3(event.target.value);
    }

    function handleSubmit() {
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            asignarCalif();
        }
        else {
            swal({
                title: "Campos Vacios",
                text: "Favor de llenar todos los campos",
                buttons: {
                  confirm: { text: "Ok", className: "btnOk" },
                },
              });
        }
    }

    async function cargarAlumno() {
        const result = await new GetAlumno().send(calificacion.idAlumno);
        let a = new Alumno(result.matricula, result.nombre, result.casa)
        setAlumno(a);
        return a;
    }

    useEffect(() => {
        if (alumno === null) {
            cargarAlumno();
        }
    });

    function asignarCalif() {
        new UpdateCalificacion().send(calificacion.idCalif,p1,p2,p3);
        window.location.reload();
    }

    return (
        <tr>
            <td>{alumno.matricula}</td>
            <td>{alumno.nombre}</td>
            <td><input className="input-calif" onChange={handleP1Change} type="text"/></td>
            <td><input className="input-calif" onChange={handleP2Change} type="text"/></td>
            <td><input className="input-calif" onChange={handleP3Change} type="text"/></td>
            <td><div>{calificacion.final}</div></td>
            <td><button className="btn-guardar" onClick={handleSubmit}>Guardar</button></td>
        </tr>
    );
}