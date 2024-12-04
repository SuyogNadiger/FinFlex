import React from "react";

const Moreinfo = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg">
          At <span className="font-semibold text-teal-400">FinFlex Premium</span>, we are here to help you take charge of your financial future. 
          Reach out to our experts to receive personalized financial advice tailored to your needs and goals.
        </p>
        <p className="text-lg">
          Let us help you manage your financial life and plan a more secure, successful future.
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-6 rounded-md w-full transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Moreinfo;
