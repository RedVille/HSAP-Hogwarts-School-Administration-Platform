// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDwlf-9jfocVeeMnGU3JsoltcsP8u1ca2Q",
  authDomain: "hogwarts-school-administration.firebaseapp.com",
  projectId: "hogwarts-school-administration",
  storageBucket: "hogwarts-school-administration.appspot.com",
  messagingSenderId: "699729257398",
  appId: "1:699729257398:web:770a7154ae381f4b69d717"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}