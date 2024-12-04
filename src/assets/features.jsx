import React from "react";

function Features() {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="flex justify-center pt-16">
        <img
          src="/logo_white_png.png"
          alt="FinFlex Logo"
          className="w-24 h-16 shadow-lg"
        />
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full flex justify-center items-start">
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
                Easily calculate returns, track potential growth, and plan
                smarter with tools designed to simplify complex investment
                calculations.
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
                Access a wide range of investment documents, financial guides,
                and essential resources to support your wealth-building journey.
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
                Stay up to date with live market updates, stock movements, and
                key financial insights, ensuring you're always informed about
                the latest trends.
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
                with personalized investment advice and real-time support to
                guide your decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
