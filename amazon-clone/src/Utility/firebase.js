// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbOOXBL4ZC-XGn7NMap7qP7s30i7rdtf0",
  authDomain: "clone-89d6d.firebaseapp.com",
  projectId: "clone-89d6d",
  storageBucket: "clone-89d6d.firebasestorage.app",
  messagingSenderId: "52498330376",
  appId: "1:52498330376:web:72874967574f82c9f332bd",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
