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
//Regresa un arreglo con todas las materias
export async function getAllMateria(){
    const materiaSnapshot = await getDocs(ref);
    const materiaList = materiaSnapshot.docs.map(doc => doc.data());
    return materiaList;
}

//Hace query con la matricula del materia y devuelve el registro
export async function getMateria(matricula){
    const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs[0].data();
}
}