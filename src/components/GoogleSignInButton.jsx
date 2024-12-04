// src/components/GoogleSignInButton.jsx

import React from "react";
import { auth, db } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; // Import faGoogle icon

const provider = new GoogleAuthProvider();

const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user document exists
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        { merge: true }
      );

      console.log("User signed in:", user);
      // Handle the signed-in user here
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle errors here
    }
  };

  return (
    <div className="w-full flex justify-center border-black text-black">
      <button
        onClick={handleSignIn} // Corrected the function name here
        className="border-2 border-black hover:bg-black transition-all duration-200 hover:scale-90 hover:text-white text-base font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <FontAwesomeIcon icon={faGoogle} className="font-bold text-2xl" />
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleSignInButton;
