// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_g95X9S4_W-teH0FeFnKV0kmYoHlOH14",
  authDomain: "hello-firebase-1fb9a.firebaseapp.com",
  projectId: "hello-firebase-1fb9a",
  storageBucket: "hello-firebase-1fb9a.appspot.com",
  messagingSenderId: "16808278306",
  appId: "1:16808278306:web:c24ffd9fbb4012e5ddcd7b",
  measurementId: "G-ZMKQTBJCR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log('Firebase is initialized');

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
console.log('Firestore is initialized');

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
