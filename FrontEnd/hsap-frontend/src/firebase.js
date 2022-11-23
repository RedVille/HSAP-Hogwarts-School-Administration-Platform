// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDB8cfeFedLugAsIlqQTjRfk3FvpqsJ2VA",
    authDomain: "hsap-cc2d8.firebaseapp.com",
    projectId: "hsap-cc2d8",
    storageBucket: "hsap-cc2d8.appspot.com",
    messagingSenderId: "35281795056",
    appId: "1:35281795056:web:37f665893cfac1c3848f35",
    measurementId: "G-QZQM5SKSY7"
  };

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}