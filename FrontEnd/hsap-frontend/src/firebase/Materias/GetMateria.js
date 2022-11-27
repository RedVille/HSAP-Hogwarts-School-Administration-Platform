import { firestore } from "../../firebase";
import { collection, getDocs, query, where, limit } from "@firebase/firestore";
import Materia from "../../classes/Materia";

const ref = collection(firestore, "materias");

export default class GetMateria {
    async send(matricula) {
        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        const materia = querySnapshot.docs[0].data();
        
        return new Materia(
            materia.matricula,
            materia.nombre
        );
    }    
}