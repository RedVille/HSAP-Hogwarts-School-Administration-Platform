import { firestore } from "../../firebase";
import { collection, getDocs, query, where, limit } from "@firebase/firestore";
import Alumno from "../../classes/Alumno";

const ref = collection(firestore, "alumnos");

export default class GetAlumno {
    async send(matricula) {
        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        const alumno = querySnapshot.docs[0].data();
        
        return new Alumno(
            alumno.matricula,
            alumno.nombre,
            alumno.casa
        );
    }    
}