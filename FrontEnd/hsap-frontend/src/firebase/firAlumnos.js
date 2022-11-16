import { firestore } from "../firebase";
import { addDoc, collection, getDocs, setDoc, doc, query, where, limit, deleteDoc } from "@firebase/firestore";

const ref = collection(firestore,"alumnos");

//almacena el alumno si no encuentra un alumno con la misma matricula
export async function saveAlumno(matricula, nombre, casa){
    let data = {
        matricula: matricula,
        nombre: nombre,
        casa: casa,
    }

    const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.docs[0].exists()){
        console.log("Esa matricula ya existe");
    } else {
        try {
            console.log(data);
            addDoc(ref,data);
        }catch(d){
            console.log(d);
        }
    }
}