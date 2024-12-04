import React, { useEffect, useState, useRef } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState(""); // User's profile picture
  const [loading, setLoading] = useState(true); // Loading state
  const auth = getAuth();
  const navigate = useNavigate();

  // Refs for sections
  const featuresRef = useRef(null);
  const newsLibRef = useRef(null);
  const startInvestRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPhotoURL(currentUser.photoURL || "");
      } else {
        setUser(null);
      }
    });

    // Simulate loading effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, [auth]);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen exo-2-text bg-gradient-to-br from-black to-slate-900">
      <div className="w-full h-[88vh] relative ">
        {/* Logo */}
        <div className="z-50 flex fixed w-full h-20 justify-between">
          <img
            src="/logo_white_png.png"
            alt="Logo"
            className="w-16 h-10 shadow-sm bg-transparent ml-11 mt-6 cursor-pointer"
            onClick={scrollToTop}
          />
        </div>

        <div className="z-50 h-10 flex justify-end pr-10 pt-10 space-x-10 items-center text-white relative">
          <a
            href="contact"
            className="relative text-lg hover:scale-95 hover:text-yellow-500"
          >
            Help
          </a>
          <a
            href="about"
            className="relative text-lg hover:scale-95 hover:text-yellow-500"
          >
            About
          </a>

          {/* Profile Picture */}
          {user ? (
            <Link to="/user" className="relative">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover shadow-lg cursor-pointer"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-inherit hover:bg-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-2xl hover:scale-90 duration-200 hover:bg-yellow-500 rounded-xl"
                  />
                </div>
              )}
            </Link>
          ) : (
            <Link to="/login" className="text-sm text-white">
              Login
            </Link>
          )}
        </div>

        {/* Sidebar Menu */}
        <div className="min-h-screen flex items-center">
          <div className="flex flex-col w-12 lg:w-14 border-yellow-500 border-r-2 p-1 rounded-r-full fixed duration-300 z-50 hover:bg-slate-950">
            <img
              src="sidebar_icon/features.png"
              alt="features"
              id="features"
              title="Features"
              className="shadow-sm cursor-pointer mt-14 mr-3.5 ml-1 hover:scale-125 transition-all duration-200"
              onClick={() => scrollToSection(featuresRef)}
            />
            <img
              src="sidebar_icon/newsandbook.png"
              alt="news-lib"
              id="news-lib"
              title="FinNews and E-library"
              className="shadow-sm bg-transparent cursor-pointer mt-16 mr-3 ml-1 hover:scale-125 transition-all duration-200"
              onClick={() => scrollToSection(newsLibRef)}
            />
            <img
              src="sidebar_icon/startinvest.png"
              alt="start-invest"
              id="start-invest"
              title="Start Investing"
              className="shadow-sm bg-transparent cursor-pointer mt-16 mr-3 ml-1 hover:scale-125 transition-all duration-200"
              onClick={() => scrollToSection(startInvestRef)}
            />
            <img
              src="sidebar_icon/boticon.png"
              alt="boticon"
              id="boticon"
              title="FinBot"
              className="cursor-not-allowed shadow-sm bg-transparent mt-16 mb-14 mr-3 ml-1 hover:scale-125 transition-all duration-200"
            />
          </div>

          {/* Main Content Section */}
          <div className="flex w-full h-fit justify-start pl-20 lg:pl-40 overflow-hidden pr-10">
            <div className="text-white mb-16">
              <h1 className="text-3xl font-bold montserrat">
                Your Future Starts Here:{" "}
                <span className="text-yellow-500">Welcome to FinFlex</span>
              </h1>
              <p className="mt-4 text-gray-300 text-lg">
                Plan, grow, and stay ahead with smart investments and real-time
                insights—all in one seamless dashboard.
              </p>
            </div>
          </div>
          <div>
            <img
              src="dashboard.png"
              alt=""
              className="w-0 lg:w-4/5 mb-20 ml-36"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        ref={featuresRef}
        className="features-container w-full min-h-screen text-white"
      >
        <h2 className="z-50 w-full text-center text-3xl montserrat pb-8">
          Your Financial Success Starts Here:{" "}
          <span className="text-yellow-500">Plan</span>,{" "}
          <span className="text-yellow-500">Learn</span> and{" "}
          <span className="text-yellow-500">Calculate</span>
        </h2>
        <div className="mx-20 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:flex-nowrap gap-10">
          {/* Container 1 */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <Link to="/planner">
              <img
                src="main_features/investplanner.png"
                alt="Investment planner"
                className="w-full h-fit rounded-xl hover:scale-105 transform transition-transform duration-300 active:scale-95"
              />
            </Link>
          </div>

          {/* Container 2 */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <Link to="/documentation">
              <img
                src="main_features/documentation.png"
                alt="Documentation"
                className="w-full h-fit rounded-xl hover:scale-105 transform transition-transform duration-300 active:scale-95"
              />
            </Link>
          </div>

          {/* Container 3 */}
          <div className="w-full sm:w-[45%] lg:w-[30%]">
            <Link to="/calcidash">
              <img
                src="main_features/calculator.png"
                alt="Calculator"
                className="w-full h-fit rounded-xl hover:scale-105 transform transition-transform duration-300 active:scale-95"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* News & Library Section */}
      <div
        ref={newsLibRef}
        className="news-lib w-full min-h-fit flex justify-center"
      >
        <div className="w-4/5">
          <h2 className="text-center text-white py-6 tracking-wider text-xl lg:text-3xl montserrat">
            Explore, Learn, and Grow with Our{" "}
            <span className="text-yellow-500">News</span> &{" "}
            <span className="text-yellow-500">E-Library</span>
          </h2>
          <Link to="/news">
            <img
              src="main_features/news.png"
              alt="calculator"
              className="hover:scale-105 active:scale-95 transform transition-transform duration-300 rounded-xl"
            />
          </Link>
          <Link to="/elib">
            <img
              src="main_features/elib.png"
              alt="calculator"
              className="hover:scale-105 active:scale-95 transform transition-transform duration-300 rounded-xl mt-10"
            />
          </Link>
        </div>
      </div>

      {/* Start Invest Section */}
      <div
        ref={startInvestRef}
        className="start-invet min-h-screen flex justify-center items-center text-white"
      >
        <div className="w-4/5 my-28">
          <h2 className="text-center text-white py-6 tracking-wider text-xl lg:text-3xl montserrat">
            Invest with Confidence: Explore Our{" "}
            <span className="text-yellow-500">Trusted Partners</span>
          </h2>

          <div className="w-full flex justify-center">
            <a href="https://zerodha.com/" target="_blank">
              <img src="main_features/zerodha.png" alt="" className="hover:scale-110 active:scale-95 transition-all duration-200 absolute z-50 w-10 mt-56 ml-12" />
            </a>
            <a href="https://www.angelone.in/" target="_blank">
              <img src="main_features/angle.png" alt="" className="hover:scale-110 active:scale-95 transition-all duration-200 absolute z-50 w-12 mt-56 ml-36" />
            </a>
            <a href="https://upstox.com/" target="_blank">
              <img src="main_features/up.png" alt="" className="hover:scale-110 active:scale-95 transition-all duration-200 absolute z-50 w-8 mt-56 ml-60" />
            </a>
            <a href="https://dhan.co/" target="_blank">
              <img src="main_features/dhan.png" alt="" className="hover:scale-110 active:scale-95 transition-all duration-200 absolute z-50 w-10 mt-56 ml-80" />
            </a>
          </div>
          
            <img
              src="main_features/investnow.png"
              alt="calculator"
              className="transform transition-transform duration-300 rounded-xl"
            />

          
            <img
              src="main_features/chatbot.png"
              alt="calculator"
              className="cursor-not-allowed transform transition-transform duration-300 rounded-xl mt-10"
            />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
