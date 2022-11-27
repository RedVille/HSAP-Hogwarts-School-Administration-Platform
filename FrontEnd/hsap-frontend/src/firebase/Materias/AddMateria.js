import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, query, where, limit } from "@firebase/firestore";
import Materia from "../../classes/Materia";

const ref = collection(firestore, "materias");

export default class AddMateria {
    async send(matricula, nombre) {

        let newMateria = new Materia(matricula, nombre);

        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.docs[0].exists()){
            console.log("Esa matricula ya existe");
        } else {
            try {
                console.log(newMateria);
                addDoc(ref, newMateria);
            }catch(d){
                console.log(d);
            }
        }
    }    
}