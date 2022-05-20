// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyB8ymqmv42tQUi5o538KMsYf_Gg7O7-KMU",
//   authDomain: "yumito-e6155.firebaseapp.com",
//   projectId: "yumito-e6155",
//   storageBucket: "yumito-e6155.appspot.com",
//   messagingSenderId: "765858403311",
//   appId: "1:765858403311:web:bfd37b513ac0100dab9c1a",
//   measurementId: "G-PN2LMWFZKZ"
// };
//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAatxM9KRLkJLxAGJA9_fZ58RO0Nm9vE2g",
    authDomain: "foodordering-a5c58.firebaseapp.com",
    projectId: "foodordering-a5c58",
    storageBucket: "foodordering-a5c58.appspot.com",
    messagingSenderId: "530123077057",
    appId: "1:530123077057:web:5ff7dffdf3e2338d19eb40",
    measurementId: "G-P3G9GQ9JLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export var db = getFirestore(app);