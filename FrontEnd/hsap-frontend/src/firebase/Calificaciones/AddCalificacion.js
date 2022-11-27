import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class AddCalificacion {
    async send(idAlumno, idMateria) {

        const q = query(ref, where('idCalif', '==', idAlumno), where('idMateria','==',idMateria), limit(1));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.docs[0].exists()){
            console.log('Ya hay una calificación asociada con este alumno')
        } else {
            //obtener el último id de la colección para generar el nuevo
            q = query(ref, orderBy('idCalif', 'desc'), limit(1));
            querySnapshot = await getDocs(q);

            let data = {
                final: 0.0,
                idAlumno: idAlumno,
                idCalif: querySnapshot.docs[0].idCalif + 1,
                idMateria: idMateria,
                parcial1: 0.0,
                parcial2: 0.0,
                parcial3: 0.0
            }

            try {
                addDoc(ref, data);
            }catch(d){
                console.log(d);
            }
        }


    }    
}