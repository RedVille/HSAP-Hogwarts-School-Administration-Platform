import { firestore } from "../firebase";
import { addDoc, collection, getDocs, setDoc, doc, query, where, limit, deleteDoc } from "@firebase/firestore";

const ref = collection(firestore,"materias");

//Almacena la materia si no encuentra una materia con la misma matricula
export async function saveMateria(matricula, nombre){
    let data = {
        matricula: matricula,
        nombre: nombre,
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