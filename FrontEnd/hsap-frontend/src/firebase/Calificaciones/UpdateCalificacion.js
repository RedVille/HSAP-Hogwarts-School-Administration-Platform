import { firestore } from "../../firebase";
import { collection, getDocs, setDoc, doc, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class UpdateCalificacion {
    async send(idCalif, parcial1, parcial2, parcial3) {
        const final = ((p1 + p2 + p3)/3);
        q = query(ref, where('idCalif', '==', idCalif), limit(1));
        const querySnapshot = await getDocs(q);

        await setDoc(doc(firestore, 'califs', querySnapshot.docs[0].id),{
            final: final,
            parcial1: p1,
            parcial2: p2,
            parcial3: p3
        });
    }    
}