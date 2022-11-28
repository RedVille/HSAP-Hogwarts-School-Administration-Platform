import React, { useEffect } from "react";
import swal from "sweetalert";
import "./Materias.css";
import AddCalificacion from "../../firebase/Calificaciones/AddCalificacion";
import GetCalificacion from "../../firebase/Calificaciones/GetCalificacion";
import DeleteCalificacion from "../../firebase/Calificaciones/DeleteCalificacion";


export default function AsignarMateriaItem(props) {
    const alumno = props.alumno;
    const cargarAlumnos = props.cargarAlumnos;
    const materia = props.materia;

    var resultado = 0;
    
    useEffect(() => {
        Asignado()
      });

    async function asignarMateria(event) {
        //Verificamos si esta asignado
        if(event.target.innerHTML === "Asignar"){
            //Agregamos alumno
            resultado = await new AddCalificacion().send(alumno.matricula.toString(),materia.toString())
            cargarAlumnos();
            if(resultado === 1){
                swal({
                    title: "Asignación Exitosa",
                    buttons: {
                      confirm: { text: "Ok", className: "btnOk" },
                    },
                  });
            }
        }else{
            //Eliminamos alumno
            resultado = await new DeleteCalificacion().send(alumno.matricula.toString(),materia.toString())
            cargarAlumnos();
            if(resultado){
                swal({
                    title: "Desasignación Exitosa",
                    buttons: {
                      confirm: { text: "Ok", className: "btnOk" },
                    },
                  });
            }
        }
    }

    //Define el color y texto del boton
    async function Asignado(){
        var boton =  document.getElementById(alumno.matricula);

        if(await new GetCalificacion().sendAlumno(alumno.matricula.toString() ,materia.toString())){
            //ESTA ASIGNADO
            boton.className = "btnAsignar btnDesasignar";
            boton.innerHTML = "Desasignar";
        }else{
            boton.className = "btnAsignar"
            boton.innerHTML = "Asignar";
        }
    }

    return (
        
        <tr>
          <td>{alumno.matricula}</td>
          <td>{alumno.nombre}</td>
          <td>{alumno.casa}</td>
          <td className="asignar-accion">
            
            <button id={alumno.matricula} className="btnAsignar" onClick={asignarMateria}>Asignar </button>
          </td>
        </tr>
    );
}