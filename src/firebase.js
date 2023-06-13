// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZdpoxiknnOj2ly0LKkhG0oonn2paHAcQ",
  authDomain: "realtor-react-df973.firebaseapp.com",
  projectId: "realtor-react-df973",
  storageBucket: "realtor-react-df973.appspot.com",
  messagingSenderId: "115215722087",
  appId: "1:115215722087:web:1c66154dcf1e4e930b56c2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
