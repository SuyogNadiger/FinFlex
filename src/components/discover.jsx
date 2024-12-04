import React from "react";
import Footer from "./footer";
import { easeIn, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
import Banner from "../assets/banner";
import Queries from "../assets/queries";

function Discover() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black to-slate-900 bg-cover m-0 exo-2-text">
      <div className="flex lg:fixed w-full h-20 bg-opacity-95 justify-between items-center">
        <img
          src="/logo_white_png.png"
          alt="Logo"
          className="w-15 h-10 shadow-sm bg-transparent ml-11 mt-6 cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
      <div className="flex p-10 lg:space-x-10 items-center text-white">
        {/* login and signup button */}
        <div className="absolute right-0 top-0 mt-8 lg:mr-5 flex lg:space-x-3">
          <Link
            to="/login"
            className="montserrat px-6 my-auto py-1 rounded-2xl hover:bg-inherit hover:text-blue-600 bg-blue-800 hover:scale-110 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="montserrat px-6 my-auto rounded-2xl text-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Create Account
          </Link>
        </div>
      </div>

      <div className="w-full min-h-[40vh] lg:min-h-screen flex justify-center items-center pb-20">
        <Banner />
      </div>

      <div className="w-full min-h-fit flex justify-center">
        <div>
          <h2 className="flex justify-center text-5xl montserrat text-white">
            SPOTLIGHT
          </h2>
          <span className="exo-2-text max-w-2xl flex text-[21px] text-center text-gray-300 mt-10">
            Discover tailored investment strategies for savings,
            wealth-building, and financial growth-perfect for any financial
            journey
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center items-start my-10">
        <div className="w-full sm:w-3/4 lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
          {/* Feature 1 */}
          <div className="text-white text-center p-3 lg:p-5 rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/spotlight/planer.png"
              alt="Custom Investment Plans"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-lg font-bold">Custom Investment Plans</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Design personalized investment strategies, set clear financial
              goals, and monitor your progress to achieve long-term wealth
              growth.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-white text-center p-3 lg:p-5 rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/spotlight/cal.png"
              alt="Investment Calculator"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-lg font-bold">Investment Calculator</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Easily calculate returns, track potential growth, and plan smarter
              with tools designed to simplify complex investment calculations.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-white text-center p-3 lg:p-5 rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/spotlight/doc.png"
              alt="Sixth Feature"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-lg font-bold">Resource Library</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Access a wide range of investment documents, financial guides, and
              essential resources to support your wealth-building journey.
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-white text-center p-3 lg:p-5 rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/spotlight/news.png"
              alt="Live Market News"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-lg font-bold">Live Market News</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Stay up to date with live market updates, stock movements, and key
              financial insights, ensuring you're always informed about the
              latest trends.
            </p>
          </div>

          {/* Item 5 */}
          <div className="text-white text-center p-3 lg:p-5 rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/spotlight/book.png"
              alt="Fifth Feature"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-lg font-bold">Knowledge Hub</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Explore a curated collection of renowned investment books,
              insightful blogs, and expert articles to deepen your financial
              understanding and stay informed.
            </p>
          </div>

          {/* Item 6 */}
          <div className="text-white text-center p-3 lg:p-5 rounded-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/spotlight/bot.png"
              alt="Third Feature"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h3 className="text-lg font-bold">FinBot Assistance</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Get quick, AI-powered answers to your financial questions, along
              with personalized investment advice and real-time support to guide
              your decisions.
            </p>
          </div>
        </div>
      </div>

      {/* partners */}
      <div className="w-full min-h-fit flex justify-center items-start mt-40">
        <div className="text-white">
          <h2 className="flex justify-center text-center text-4xl montserrat">
            OUR TRUSTED PARTNERS
          </h2>
          <p className="exo-2-text max-w-2xl flex text-[21px] text-center justify-center mt-10 text-gray-300">
            We partner with top financial institutions and platforms to bring
            you reliable insights and powerful tools for smarter investing.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-12 lg:my-16 shadow-none">
        <img className="size-2/3" src="/partners.png" alt="" />
      </div>

      {/* reviews */}
      <div className="w-full min-h-fit flex justify-center items-start mt-40">
        <div className="text-white">
          <h2 className="flex justify-center text-center text-4xl montserrat">
            HEAR FROM OUR USERS
          </h2>
          <p className="exo-2-text max-w-2xl flex text-[21px] text-center justify-center m-8 text-gray-300">
            See how our users are achieving their financial goals with our
            Al-powered investment planner.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center mb-0 lg:mb-8">
        <img
          className="lg:w-2/3"
          src="reviews/andrew.png"
          alt="Andrew's Review"
        />

        <div className="w-11/12 lg:w-3/5 absolute text-center text-white text-xs lg:text-xl">
          <p>
            FinFlex has completely transformed the way I manage my finances. The
            investment planner is easy to use, and Finbot provides instant
            advice whenever I need it. Highly recommended!
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-0 lg:mb-8">
        <img
          className="lg:w-2/3"
          src="reviews/razorpay.png"
          alt="razorpay Review"
        />

        <div className="w-4/5 lg:w-3/5 absolute text-center text-white text-xs lg:text-xl">
          <p>
            As someone new to investing, FinFlex made the whole process so much
            easier. The step-by-step guidance and investment calculator are
            fantastic!
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-0 lg:mb-8">
        <img className="lg:w-2/3" src="reviews/drake.png" alt="drake Review" />

        <div className="w-4/5 lg:w-3/5 absolute text-center text-white text-xs lg:text-xl">
          <p>
            As someone new to investing, FinFlex made the whole process so much
            easier. The step-by-step guidance and investment calculator are
            fantastic!
          </p>
        </div>
      </div>

      <div className="w-full min-h-fit flex justify-center items-start mt-32">
        <div className="text-white">
          <h2 className="flex justify-center text-4xl montserrat">
            ESSENTIAL QUERIES
          </h2>
          {/* <p className="exo-2-text max-w-2xl flex text-[21px] text-center justify-center mt-10 text-gray-300">
            We partner with top financial institutions and platforms to bring
            you reliable insights and powerful tools for smarter investing.
          </p> */}
        </div>
      </div>
      <Queries />
      <div className="m-40"></div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Discover;
