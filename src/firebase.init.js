// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjf-J-kv2i0UjQ-XEhrPnSnPKsKOYNF8A",
  authDomain: "furniture-warehouse-949eb.firebaseapp.com",
  projectId: "furniture-warehouse-949eb",
  storageBucket: "furniture-warehouse-949eb.appspot.com",
  messagingSenderId: "562240595508",
  appId: "1:562240595508:web:1274354b320c7799d2cc61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
