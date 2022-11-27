import { firestore } from "../../firebase";
import { collection, getDocs, doc, query, where, limit, deleteDoc } from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class DeleteCalificacion {
    async send(idCalif) {

        const q = query(ref, where("idCalif", "==", String(idCalif)), limit(1));
        const querySnapshot = await getDocs(q);

        await deleteDoc(doc(firestore, "calificaciones", querySnapshot.docs[0].id));
    }    
}