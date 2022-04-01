// Import the functions you need from the SDKs you need
// import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8cBVac4N2dtQiT9F-Maehu_ERkV6nr0I",
  authDomain: "productsmern.firebaseapp.com",
  projectId: "productsmern",
  storageBucket: "productsmern.appspot.com",
  messagingSenderId: "702206007709",
  appId: "1:702206007709:web:eb399d121e644729fd3774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const addUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
  // const useCredentials = signInWithEmailAndPassword(auth, email, password)
  // console.log(useCredentials);
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOutUser =()=>{
signOut(auth)
} 
