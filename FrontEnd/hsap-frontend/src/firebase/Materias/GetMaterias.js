import { firestore } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import Materia from "../../classes/Materia";

const ref = collection(firestore, "materias");

//Regresa un arreglo con todas las materias
export default class GetMaterias {
    async send() {
        const materiaSnapshot = await getDocs(ref);
        const materiasList = materiaSnapshot.docs.map( (doc) => ( {...doc.data()} ) );
        
        return materiasList.map(materia => new Materia(
            materia.matricula,
            materia.nombre
        ));
    }    
}