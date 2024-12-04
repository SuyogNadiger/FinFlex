import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";

function CalculatorDash() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-slate-900">
      {/* Logo */}
      <div className="flex fixed w-full h-20">
        <Link to="/dashboard">
          <img
            src="/logo_white_png.png"
            alt="Logo"
            className="w-15 h-10 shadow-sm bg-transparent ml-11 mt-6 cursor-pointer"
          />
        </Link>
      </div>
      <div className="h-10 flex justify-end pr-6 lg:pr-12 pt-12 space-x-6 lg:space-x-14 items-center text-white relative">
        <a
          href="/documentation"
          className=" hover:text-yellow-500 hover:scale-105"
        >
          Why Invest?
        </a>
        <Link to="/Planner" className=" hover:text-yellow-500 hover:scale-105">
          <p>Plan Investment</p>
        </Link>
      </div>

      <div className="w-full flex justify-center py-[6%]">
        <div className="w-4/5 grid grid-cols-2 justify-center h-fit gap-12">
          <Link to="/SIPcalc">
            <img src="claculators/sip.png" alt="calculator" className="hover:scale-x-105 active:scale-95 transform transition-transform duration-300" />
          </Link>
          <Link to="/lumpsum">
            <img src="claculators/lumpsum.png" alt="calculator" className="hover:scale-x-105 active:scale-95 transform transition-transform duration-300" />
          </Link>
          <Link to="/stepup">
            <img src="claculators/stepup.png" alt="calculator" className="hover:scale-x-105 active:scale-95 transform transition-transform duration-300" />
          </Link>
          <Link to="/retirement">
            <img
              src="claculators/retirement.png"
              alt="calculator"
              className="hover:scale-x-105 active:scale-95 transform transition-transform duration-300"
            />
          </Link>
          <span>
            <img
              src="claculators/goal.png"
              alt="calculator"
              className="hover:scale-95 active:scale-95 transform transition-transform duration-300"
            />
          </span>
          <span>
            <img
              src="claculators/fixed.png"
              alt="calculator"
              className="hover:scale-95 active:scale-95 transform transition-transform duration-300"
            />
          </span>
          <span>
            <img
              src="claculators/time.png"
              alt="calculator"
              className="hover:scale-95 active:scale-95 transform transition-transform duration-300"
            />
          </span>
          <span>
            <img
              src="claculators/compund.png"
              alt="calculator"
              className="hover:scale-95 active:scale-95 transform transition-transform duration-300"
            />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CalculatorDash;
