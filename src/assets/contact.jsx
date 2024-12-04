import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <div className="max-w-5xl w-full text-center">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="/logo_white_png.png"
            alt="FinFlex Logo"
            className="mx-auto w-32 h-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          Have a question, feedback, or need assistance? We're here to help!
        </p>

        {/* Contact Options */}
        <div className="space-y-8 text-left text-gray-300">
          {/* Email Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Email Us</h2>
            <p>General Inquiries: <a href="mailto:support@finflex.com" className="text-blue-400 underline">support@finflex.com</a></p>
            <p>Technical Support: <a href="mailto:techsupport@finflex.com" className="text-blue-400 underline">techsupport@finflex.com</a></p>
          </div>

          {/* Phone Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Call Us</h2>
            <p>Phone: <span className="font-semibold">+1-800-123-4567</span></p>
            <p>Hours: Monday - Friday, 9 AM - 5 PM (EST)</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Follow Us</h2>
            <p>Connect with us on social media:</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com/finflex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/finflex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/finflex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Physical Address */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Visit Us</h2>
            <p>FinFlex HQ</p>
            <p>BCA ground floor</p>
            <p>Hubli 580032</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
