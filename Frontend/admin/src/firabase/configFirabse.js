// Import the functions you need from the SDKs you need
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
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

export const isLoginUserFB =()=>{
  console.log("llego");
  useEffect(() => {
    onAuthStateChanged(auth, currentUser);
    console.log(currentUser);
  }, [])
}

// import firebase from "firebase/app";
// import "firebase/auth";

// // https://firebase.google.com/docs/web/setup#available-libraries
// if (!firebase.apps.length) {
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8cBVac4N2dtQiT9F-Maehu_ERkV6nr0I",
//   authDomain: "productsmern.firebaseapp.com",
//   projectId: "productsmern",
//   storageBucket: "productsmern.appspot.com",
//   messagingSenderId: "702206007709",
//   appId: "1:702206007709:web:eb399d121e644729fd3774"
// };

// firebase.initializeApp(firebaseConfig);
// } else {
//   // if already initialized, use that one
//   firebase.app();
// }

// export const auth = firebase.auth();

// export function singInWithGoogle() {
//   const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

//   return auth.signInWithPopup(GoogleAuthProvider);
// }

// export function singInWithEmailAndPassword(email, password) {
//   return auth.signInWithEmailAndPassword(email, password);
// }

// export function singUpWithEmailAndPassword(email, password) {
//   return auth.createUserWithEmailAndPassword(email, password);
// }

// export function sendPasswordResetEmail(email) {
//   return auth.sendPasswordResetEmail(email);
// }

// export function signOut() {
//   return auth.signOut(auth.currentUser.getIdToken());
// }

// export function getCurrentUserToken() {
//   console.log(auth.currentUser.getIdToken());
//   if (!auth.currentUser) {
//     return null;
//   }

//   return auth.currentUser.getIdToken();
// }

// export function getCurrentUserEmail() {
//   if (!auth.currentUser) {
//     return null;
//   }

//   return auth.currentUser.email;
// }
