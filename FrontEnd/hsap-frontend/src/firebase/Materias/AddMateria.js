import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, query, where, limit } from "@firebase/firestore";
import Materia from "../../classes/Materia";

const ref = collection(firestore, "materias");

export default class AddMateria {
    async send(matricula, nombre) {

        let newMateria = {
            matricula: matricula,
            nombre: nombre,
        }

        const q = query(ref, where("matricula", "==", String(matricula)), limit(1));
        const querySnapshot = await getDocs(q);

       if(querySnapshot.docs[0] === undefined)
        {
            // Se agrega nueva materia
            try {
                addDoc(ref, newMateria);
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