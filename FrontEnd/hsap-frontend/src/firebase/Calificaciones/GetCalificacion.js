import { firestore } from "../../firebase";
import { collection, getDocs, query, where, limit } from "@firebase/firestore";
import Calificacion from "../../classes/Calificacion";

const ref = collection(firestore, "calificaciones");

export default class GetCalificacion {
    async send(idCalif) {
        const q = query(ref, where("idCalif", "==", String(idCalif)), limit(1));
        const querySnapshot = await getDocs(q);

        const calificacion = querySnapshot.docs[0].data();
        
        return new Calificacion(
            calificacion.idCalif,
            calificacion.idAlumno,
            calificacion.idMateria,
            calificacion.parcial1,
            calificacion.parcial2,
            calificacion.parcial3,
            calificacion.final
        );
    }    
}