import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, query, where, limit } from "@firebase/firestore";
import Alumno from "../../classes/Alumno";

const ref = collection(firestore, "alumnos");

export default class AddAlumno {
    async send(matricula, nombre, casa) {

        let newAlumno = new Alumno(matricula, nombre, casa);

        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.docs[0].exists()){
            console.log("Esa matricula ya existe");
        } else {
            try {
                console.log(newAlumno);
                addDoc(ref, newAlumno);
            }catch(d){
                console.log(d);
            }
        }
    }    
}