import { firestore } from "../../firebase";
import { collection, getDocs, doc, deleteDoc,} from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class DeleteCalificacion {
  async send(idAlumno, idMateria) {
    const calificacionesSnapshot = await getDocs(ref);

    var idCalif = "";

    const querySnapshot = calificacionesSnapshot.docs.map((doc) => {
        if(doc._document.data.value.mapValue.fields.idAlumno.stringValue === idAlumno & doc._document.data.value.mapValue.fields.idMateria.stringValue === idMateria){
            idCalif = doc.id
        }
    })

    if (idCalif !== "") {
      await deleteDoc(doc(firestore, "calificaciones", idCalif));
      return true;
    } else {
      return false;
    }
  }
}
