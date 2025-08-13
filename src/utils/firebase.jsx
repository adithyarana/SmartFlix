// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEVLKg86Lub2CwPIyaC1uWKn00_KoFm7M",
  authDomain: "smartflix-five.vercel.app",
  projectId: "smartflix-39c7c",
  storageBucket: "smartflix-39c7c.firebasestorage.app",
  messagingSenderId: "70561328039",
  appId: "1:70561328039:web:9cf7a90b14ad040a84a482",
  measurementId: "G-9SMR81659Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}