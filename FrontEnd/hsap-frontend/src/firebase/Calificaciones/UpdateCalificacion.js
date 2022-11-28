import { firestore } from "../../firebase";
import { collection, getDocs, setDoc, doc, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class UpdateCalificacion {
    async send(idCalif, parcial1, parcial2, parcial3) {
        /*
        const q = query(ref, where('idCalif', '==', idCalif), limit(1));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        await setDoc(doc(firestore, 'califs', querySnapshot.docs[0].id),{
            final: final,
            parcial1: parcial1,
            parcial2: parcial2,
            parcial3: parcial3
        });*/

        const final = ((parcial1 + parcial2 + parcial3)/3);
        const calificacionesSnapshot = await getDocs(ref);

        var idDoc = "";

        const querySnapshot = calificacionesSnapshot.docs.map((doc) => {
            if(doc._document.data.value.mapValue.fields.idCalif.stringValue === idCalif){
                idDoc = doc.id
            }
        })
        console.log(idDoc)

        await setDoc(doc(firestore, 'calificaciones', idDoc),{
            final: final,
            parcial1: parcial1,
            parcial2: parcial2,
            parcial3: parcial3
        });
    }    
}