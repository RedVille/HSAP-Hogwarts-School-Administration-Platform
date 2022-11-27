import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, query, where, limit } from "@firebase/firestore";

const ref = collection(firestore, "alumnos");

export default class AddAlumno {
    async send(matricula, nombre, casa) {

        let newAlumno = {
            matricula: matricula,
            nombre: nombre,
            casa: casa,
        }
        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.docs[0] === undefined)
        {
            // Se agrega nuevo alumno
            try {
                addDoc(ref, newAlumno);
                return 1;
            }catch(e){
                return 3;
            }
        }else{
            if(querySnapshot.docs[0].exists()){
                return 0;
            }
        }
        
    }    
}