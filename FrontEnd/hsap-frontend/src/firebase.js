// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDtbK9Zwz5wD5dxzTiDUuUvxc-lHEmnzMU",
  authDomain: "hsap2-c74b1.firebaseapp.com",
  projectId: "hsap2-c74b1",
  storageBucket: "hsap2-c74b1.appspot.com",
  messagingSenderId: "43434112994",
  appId: "1:43434112994:web:1f4cf944c78960f3aeebbb"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}