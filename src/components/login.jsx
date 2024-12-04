import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Import eye icons

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility
  const navigate = useNavigate();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Failed to sign in. Please check your email and password.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      alert("Failed to sign in with Google.");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-between exo-2-text">
      {/* Left side (hidden on small screens) */}
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
          <img src="\log_sign\login.png" alt="" className="w-2/3"/>
          <h2 className="text-white text-xl text-center w-3/4 mt-16 montserrat">Access your account to manage your finances and explore our services</h2>
        </div>
      </div>
      {/* Right side (Login form section) */}
      <div className="w-full sm:w-1/2 min-h-screen flex items-center justify-center">
        <div className="w-3/5 p-8 rounded-lg sm:max-w-sm md:max-w-md max-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12 montserrat">
            Login
          </h2>
          <form onSubmit={handleEmailSignIn}>
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
            <div className="mb-16 relative">
              <label
                className="block text-gray-700 text-base font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border-2 border-black shadow-2xl rounded-lg"
                id="password"
                type={showPassword ? "text" : "password"}  // Toggle between text and password
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
                Login
              </button>
            </div>
          </form>

          {/* Google Sign-In Button */}
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={handleGoogleSignIn}
              className="border-2 border-black hover:bg-black transition-all duration-200 hover:scale-90 hover:text-white text-base font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faGoogle} className="font-bold text-2xl" />
              Sign In with Google
            </button>
          </div>

          <div className="text-center mt-6">
            <div className="font-bold">
              Don't have an account?{" "}
              <div className="m-3 hover:scale-95">
                <a
                  href="/signup"
                  className="text-white border-2 bg-black border-black p-2 rounded-lg"
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
