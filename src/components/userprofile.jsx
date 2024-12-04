import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome user icon

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState(null); // Display current profile picture
  const auth = getAuth();
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPhotoURL(currentUser.photoURL || ""); // Keep as empty string initially
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/"); // Redirect to the Discover page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Function to get username
  const getUsername = () => {
    // Check if Firebase user has a displayName or use first and last name as fallback
    if (user?.displayName) {
      return user.displayName; // Use displayName if set
    } else if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`; // Use first and last name if available
    } else if (user?.email) {
      return user.email.split("@")[0]; // Fallback to the part before "@" in email
    } else {
      return "User Name"; // Fallback if no name is available
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-black to-slate-950 exo-2-text text-white">
      <div className="flex justify-center pb-24">
        <img
          src="/logo_white_png.png"
          alt="FinFlex Logo"
          className="w-24 h-16 shadow-lg"
        />
      </div>
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg relative">
        {user ? (
          <div>
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              ) : (
                // Display the FontAwesome user icon if no photoURL is available
                <div className="w-32 h-32 rounded-full bg-gray-500 flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={faUser} className="text-4xl" />
                </div>
              )}
            </div>

            {/* User Name and Email */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2 montserrat">
                {getUsername()}
              </h2>
              <p className="text-lg text-gray-400 mb-6">{user.email}</p>
            </div>

            {/* About User Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-300 py-2">About You</h2>
              <p className="text-gray-400">
                {user.displayName
                  ? `Hey, ${user.displayName}! Aspiring innovator passionate about personal finance and technology. Driven by a vision to simplify financial planning, I strive to blend creativity with smart solutions. Always eager to learn, grow, and make a positive impact.`
                  : "Please complete your profile for a more personalized experience."}
              </p>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-400">
              Please log in to view your profile
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
