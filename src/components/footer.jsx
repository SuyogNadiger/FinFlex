import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="m-auto py-10 bg-gradient-to-t from-black to-slate-900 text-gray-300">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">About FinFlex</h2>
            <p className="mt-4 text-sm">
              FinFlex is your personal finance hub, offering tools to plan
              investments, track expenses, and stay informed with financial
              news.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="about" className="text-sm hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="features" className="text-sm hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="privacy" className="text-sm hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="contact" className="text-sm hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <ul className="flex items-center space-x-4 mt-4">
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-600"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-pink-600"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="LinkedIn"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-blue-800"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-10 border-gray-700" />
        <p className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} FinFlex. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
