import { firestore } from "../../firebase";
import { collection, getDocs, doc, query, where, limit, deleteDoc } from "@firebase/firestore";

const ref = collection(firestore, "materias");

export default class DeleteMateria {
    async send(matricula) {

        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        await deleteDoc(doc(firestore, "materias", querySnapshot.docs[0].id));
    }    
}