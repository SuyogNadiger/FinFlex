// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXEXe-XCytUcvH5_ZzWfNvg0n-sPVOEB4",
  authDomain: "finflex-grow.firebaseapp.com",
  projectId: "finflex-grow",
  storageBucket: "finflex-grow.appspot.com",
  messagingSenderId: "430018408333",
  appId: "1:430018408333:web:ff4ad37e225e66a7e157c4",
  measurementId: "G-3WZQD83LNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the auth, db and other Firebase utilities
export {
  auth,
  db,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
