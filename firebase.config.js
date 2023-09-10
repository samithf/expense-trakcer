// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPPwYmBAboO3sfJHfFnvEPN5Wom_DsUfE",
  authDomain: "expense-tracker-3d5a4.firebaseapp.com",
  projectId: "expense-tracker-3d5a4",
  storageBucket: "expense-tracker-3d5a4.appspot.com",
  messagingSenderId: "912471609946",
  appId: "1:912471609946:web:40c2a96e2b32abff733e63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
