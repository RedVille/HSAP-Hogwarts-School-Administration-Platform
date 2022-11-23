import { firestore } from "../firebase";
import { collection, getDocs } from '@firebase/firestore';

const ref = collection(firestore, 'maestros');

// obtener todos los maestros
export async function getAllMaestros(){
  const maestrosSnapshot = await getDocs(ref);
  const maestrosList = maestrosSnapshot.docs.map(doc => doc.data());
  return maestrosList;
}

// devuelve un true si el correo y la contraseña son correctos
export function login(maestrosList, email, password){
  const index = maestrosList.findIndex(maestro => maestro.email === email);
  if(index == -1 || maestrosList[index].password != password)
    return false 
  return true 
}
