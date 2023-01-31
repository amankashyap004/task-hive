// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCJv-ZjH9u3aqQ34xshlU7wxDRRXtOaa94",
   authDomain: "task-hive-f159e.firebaseapp.com",
   projectId: "task-hive-f159e",
   storageBucket: "task-hive-f159e.appspot.com",
   messagingSenderId: "229765786204",
   appId: "1:229765786204:web:fdd83fea0c9f7247c05499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default { app, auth, db };
