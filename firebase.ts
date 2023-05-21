import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9B3ROus26YPF7EjIGJQosdtxfhfDZ7GU",
  authDomain: "resume-writer-21838.firebaseapp.com",
  projectId: "resume-writer-21838",
  storageBucket: "resume-writer-21838.appspot.com",
  messagingSenderId: "511235524126",
  appId: "1:511235524126:web:c909c354471c4d9eba900f",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
