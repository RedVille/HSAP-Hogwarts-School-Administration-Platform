import { firestore } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import Calificacion from "../../classes/Calificacion";

const ref = collection(firestore, "calificaciones");

export default class GetCalificaciones {
    async send(idMateria) {
        const q = query(ref, where('idMateria','==',idMateria));
        const calificacionSnapshot = await getDocs(q);
        const calificacionesList = calificacionSnapshot.docs.map( (doc) => ( {...doc.data()} ) );
        
        return calificacionesList.map(calificacion => new Calificacion(
            calificacion.idCalif,
            calificacion.idAlumno,
            calificacion.idMateria,
            calificacion.parcial1,
            calificacion.parcial2,
            calificacion.parcial3,
            calificacion.final
        ));
    }    
}