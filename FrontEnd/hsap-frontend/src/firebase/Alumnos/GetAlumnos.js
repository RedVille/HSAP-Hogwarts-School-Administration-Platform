import { firestore } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import Alumno from "../../classes/Alumno";

const ref = collection(firestore, "alumnos");

export default class GetAlumnos {
    async send() {
        const alumnoSnapshot = await getDocs(ref);
        const alumnosList = alumnoSnapshot.docs.map( (doc) => ( {...doc.data()} ) );
        
        return alumnosList.map(alumno => new Alumno(
            alumno.matricula,
            alumno.nombre,
            alumno.casa
        ));
    }    
}