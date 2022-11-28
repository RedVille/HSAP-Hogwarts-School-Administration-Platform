import { firestore } from "../../firebase";
import { collection, getDocs, updateDoc, doc, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class UpdateCalificacion {
    async send(idCalif, parcial1, parcial2, parcial3) {
        console.log(idCalif);
        console.log(parcial1);
        /*const final = ((parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3))/3);
        const q = query(ref, where('idCalif', '==', idCalif), limit(1));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        console.log(parcial1)
        
        console.log("sssssssss")
        console.log(idCalif)

        await setDoc(doc(firestore, 'calificaciones', querySnapshot.docs[0].id),{
            final: final,
            parcial1: parseFloat(parcial1),
            parcial2: parseFloat(parcial2),
            parcial3: parseFloat(parcial3)
        });*/

        const calificacionesSnapshot = await getDocs(ref);

        var idC = "";

        const querySnapshot = calificacionesSnapshot.docs.map((doc) => {
            if(doc._document.data.value.mapValue.fields.idCalif.stringValue === idCalif){
                idC = doc.id
            }
        })

        if (idC !== "") {
            const final = ((parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3))/3);
            //await deleteDoc(doc(firestore, "calificaciones", idCalif));
            await updateDoc(doc(firestore, 'calificaciones', idC),{
                final: final,
                parcial1: parseFloat(parcial1),
                parcial2: parseFloat(parcial2),
                parcial3: parseFloat(parcial3)
            });
            return true;
        } 
        else 
        {
            return false;
        }
    }    
}