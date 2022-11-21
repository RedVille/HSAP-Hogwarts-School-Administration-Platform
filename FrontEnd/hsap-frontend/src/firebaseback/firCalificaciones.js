import { firestore } from "../firebase";
import { addDoc, collection, getDocs, setDoc, doc, query, where, limit, deleteDoc } from '@firebase/firestore';

//import {useState, useEffect} from 'react'
//import {doc, updateDoc, collection, query, onSnapshot, where} from "firebase/firestore"

const ref = collection(firestore, 'califs');

// estado que tendrá todas las calificaciones de la base de datos
// const [califs, setCalifs] = useState([])


// crear calificación al momento de asignar un alumno a la materia
export async function newCalif(idAlumno, idMateria) {
    let data = {
        final: 0.0,
        idAlumno: idAlumno,
        idMateria: idMateria,
        parcial1: 0.0,
        parcial2: 0.0,
        parcial3: 0.0
    }

    const q = query(ref, where('idCalif', '==', idAlumno), where('idMateria','==',idMateria), limit(1));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.docs[0].exists()){
        console.log('Ya hay una calificación asociada con este alumno')
    } else {
        try {
            addDoc(ref, data);
        }catch(d){
            console.log(d);
        }
    }

}

// obtener todas las calificaciones de una materia
export async function getCalifs(idMateria) {
    const q = query(ref, where('idMateria','==',idMateria));
    const califsSnapshot = await getDocs(q);
    const califsList = califsSnapshot.docs.map(doc => doc.data());
    return califsList
}

// editar una calificación en específico
export async function editCalif(id, p1, p2, p3) {
    const final = ((p1 + p2 + p3)/3);
    q = query(ref, where('idCalif', '==', id), limit(1));
    const querySnapshot = await getDocs(q);

    await setDoc(doc(firestore, 'califs', querySnapshot.docs[0].id),{
        final: final,
        parcial1: p1,
        parcial2: p2,
        parcial3: p3
    });
}

// eliminar el registro cuando se desasocia un alumno con la materia
export async function deleteCalif(idCalif, idMateria){
    const q = query(ref, where('idCalif', '==', idCalif), where('idMateria','==',idMateria), limit(1));
    const querySnapshot = await getDocs(q);
    await deleteDoc(doc(firestore, 'califs', querySnapshot.docs[0].id));
}

/* cuando el componente se monta, useEffect llamará la función onSnapshot 
useEffect(()=>{
    const q = query(collection(db, 'califs'), where("idMateria","==",idMateria))
    onSnapshot(q, (querySnapshot) => {
        setCalifs(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    })
},[])

const handleUpdate = async (e) => {
    e.preventDefault()
    const califDocRef = doc(db, 'califs', id)
    try{
        await updateDoc(califDocRef, {
            title: title,
            description: description
        })
        onclose()
    } catch (err){
        alert(err)
    }
}*/
