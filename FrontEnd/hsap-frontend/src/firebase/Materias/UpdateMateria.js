import { firestore } from "../../firebase";
import { collection, getDocs, setDoc, doc, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "materias");

export default class UpdateMateria {
    async send(matricula, nombre) {
        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        await setDoc(doc(firestore, "materias", querySnapshot.docs[0].id), {
            matricula: matricula,
            nombre: nombre,
        });
    }    
}