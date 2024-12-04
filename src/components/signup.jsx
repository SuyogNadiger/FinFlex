import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Import eye icons
import GoogleSignInButton from "./GoogleSignInButton"; // Assuming you have this component

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const auth = getAuth();
  const firestore = getFirestore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await addDoc(collection(firestore, "users"), {
        userId: uid,
        firstName,
        lastName,
        email,
        createdAt: new Date().toISOString(),
      });

      alert("Account created successfully, please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("The email is already in use. Please log in or use a different email.");
          navigate("/login");
          break;
        case "auth/invalid-email":
          alert("The email address is not valid. Please provide a valid email.");
          break;
        case "auth/weak-password":
          alert("The password is too weak. Please use a stronger password.");
          break;
        case "auth/operation-not-allowed":
          alert("Email/password accounts are not enabled. Please contact support.");
          break;
        default:
          alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-between exo-2-text">
      {/* Left side (will be hidden on small screens) */}
      <div className="hidden sm:block w-1/2 bg-black relative">
        <div className="fixed p-7">
          <Link to="/">
            <img
              src="/logo_white_png.png"
              alt="Logo"
              className="w-auto h-10 shadow-sm cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
          <img src="\log_sign\signup.png" alt="" className="w-2/3"/>
          <h2 className="text-white text-xl text-center w-3/4 mt-16 montserrat">Access your account to manage your finances and explore our services</h2>
        </div>
      </div>

      {/* Right side (Form section) */}
      <div className="w-full sm:w-1/2 min-h-screen flex items-center justify-center">
        <div className="lg:w-3/5 p-8 rounded-lg sm:max-w-sm md:max-w-md max-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12 montserrat">
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full p-2 border-2 border-black shadow-2xl rounded-lg"
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full p-2 border-2 border-black shadow-2xl rounded-lg"
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border-2 border-black shadow-2xl rounded-lg"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-12 relative">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border-2 border-black shadow-2xl rounded-lg"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl text-gray-700" />
                ) : (
                  <FaEye className="text-xl text-gray-700 mt-8" />
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-black hover:scale-95 hover:shadow-2xl text-white font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Google Sign-In Button */}
          <div className="w-full flex justify-center mt-8">
            <GoogleSignInButton />
          </div>

          <div className="text-sm lg:text-base text-center mt-6">
            <div className="font-bold">
              Already have an account?{" "}
              <div className="m-3 hover:scale-95">
                <a
                  href="/login"
                  className="text-white border-2 px-4 bg-black border-black p-2 rounded-lg"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
