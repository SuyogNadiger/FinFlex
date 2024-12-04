import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./footer";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");

  const apiKey = "ct61e01r01qtcvhoe0ugct61e01r01qtcvhoe0v0";

  const categories = [
    { id: "general", name: "Global" },
    { id: "technology", name: "Technology (IT)" },
    { id: "financial", name: "Finance" },
    { id: "crypto", name: "Crypto" },
    { id: "forex", name: "Forex" },
    { id: "energy", name: "Energy" },
    { id: "healthcare", name: "Healthcare" },
    { id: "etf", name: "ETFs" },
    { id: "banks", name: "Banks" },
  ];

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const fetchNews = async (selectedCategory) => {
    try {
      setLoading(true);
      setError(null);
      setNews([]);

      const endpoint = `https://finnhub.io/api/v1/news?category=${selectedCategory}&token=${apiKey}`;
      const response = await axios.get(endpoint);
      setNews(shuffleArray(response.data));
      setLoading(false);
    } catch (err) {
      setError("Unable to fetch news. Please try again later.");
      setLoading(false);
    }
  };

  // to fetch the news from server
  // const fetchNews = async (selectedCategory) => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     setNews([]);
  
  //     const endpoint = `http://localhost:5000/api/news?category=${selectedCategory}`;
  //     const response = await axios.get(endpoint);
  //     setNews(shuffleArray(response.data));
  //     setLoading(false);
  //   } catch (err) {
  //     setError("Unable to fetch news. Please try again later.");
  //     setLoading(false);
  //   }
  // };
  

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white exo-2-text">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-950 z-50">
        <div className="flex items-center justify-between px-8 py-4">
          <Link to="/dashboard">
            <img
              src="/logo_white_png.png"
              alt="Logo"
              className="w-16 h-10 cursor-pointer"
            />
          </Link>
          <h1 className="text-4xl font-semibold text-white montserrat">FinNews</h1>
          <a href="https://economictimes.indiatimes.com/" target="_blank" className="hover:text-yellow-500">Read news in detail</a>
        </div>
        {/* Navbar */}
        <nav className="bg-gray-900 px-4 py-2">
          <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base overflow-x-auto">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className={`cursor-pointer px-4 py-2 rounded ${
                  category === cat.id ? "bg-yellow-500 text-gray-900" : "hover:text-yellow-500"
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* News Articles */}
      <main className="pt-48 px-4  flex justify-center">
        {news.length > 0 ? (
          <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/* News Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.headline || "News"}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded-lg mb-4">
                    No Image
                  </div>
                )}
                <h2 className="font-semibold text-lg">{item.headline}</h2>
                <p className="text-sm text-gray-400 mt-2 mb-4">
                  {item.summary || "No summary available."}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">No news available for this category.</div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
