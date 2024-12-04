import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Function to handle button click
  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");  // Redirect to Dashboard if logged in
    } else {
      navigate("/");  // Redirect to Discover if not logged in
    }
  };

  return (
    <div className="exo-2-text w-full min-h-screen bg-black  text-white">
      <div className="flex justify-center pt-16">
        <img
          src="/logo_white_png.png"
          alt="FinFlex Logo"
          className="w-24 h-16 shadow-lg"
        />
      </div>
      <div className="w-2/3 mx-auto px-6 sm:px-12 py-16 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold montserrat mb-6">
          Welcome to FinFlex
        </h1>
        <p className="text-xl lg:text-2xl mb-6 text-gray-300">
          Your all-in-one platform for investment planning, financial learning, and growth. At FinFlex, we aim to empower individuals to make smarter financial decisions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg lg:text-xl text-gray-400 mb-6">
          FinFlex is committed to providing you with the tools and resources to manage your investments efficiently. We bring together financial planners, calculators, news updates, and educational content to help you stay informed and make better financial decisions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg lg:text-xl text-gray-400 mb-6">
          We envision a world where financial literacy is accessible to everyone. FinFlex empowers users to grow their wealth, plan their futures, and stay on top of financial trends with ease.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Choose FinFlex?</h2>
        <ul className="text-lg text-gray-400 space-y-4 mb-6">
          <li>Comprehensive investment planning tools</li>
          <li>Easy-to-use calculators for smarter financial decisions</li>
          <li>Up-to-date financial news and educational content</li>
          <li>User-friendly interface designed for both beginners and experts</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-lg text-gray-400 mb-6">
          Join the FinFlex community and take control of your financial future. Plan, invest, and grow with the support of our comprehensive tools and resources.
        </p>
        <div className="mt-12">
          <button
            onClick={handleGetStarted}
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
