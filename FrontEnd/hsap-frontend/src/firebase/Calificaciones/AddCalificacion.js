import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, query, where, limit, orderBy } from "@firebase/firestore";

const ref = collection(firestore, "calificaciones");

export default class AddCalificacion {
    async send(idAlumno, idMateria) {

        const q = query(ref, where('idCalif', '==', idAlumno), where('idMateria','==',idMateria), limit(1));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.docs[0] === undefined)
        {
              //obtener el último id de la colección para generar el nuevo
              const a = query(ref, orderBy('idCalif', 'desc'), limit(1));
              const querySnapshot2 = await getDocs(a);
  
              let data = {
                  final: 0.0,
                  idAlumno: idAlumno,
                  idCalif: querySnapshot2.docs[0].data().idCalif + 1,
                  idMateria: idMateria,
                  parcial1: 0.0,
                  parcial2: 0.0,
                  parcial3: 0.0
              }

            // Se agrega nuevo alumno
            try {
                addDoc(ref, data);
                return 1;
            }catch(e){
                return 3;
            }
        }else{
            if(querySnapshot.docs[0].exists()){
                console.log('Ya hay una calificación asociada con este alumno')
                return 0;
            }
        }

    }    
}