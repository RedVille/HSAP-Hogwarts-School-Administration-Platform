import { firestore } from "../../firebase";
import { collection, getDocs, setDoc, doc, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "alumnos");

export default class UpdateAlumno {
    async send(matricula, nombre, casa) {
        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        await setDoc(doc(firestore, "alumnos", querySnapshot.docs[0].id), {
            matricula: matricula,
            nombre: nombre,
            casa: casa
        });
    }    
}