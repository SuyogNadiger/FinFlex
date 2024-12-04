import React, { useState, useEffect } from "react";
import booksData from "/books.json"; 
import { Link } from "react-router-dom";

function Elibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  // Shuffle function to randomize the array
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Filter books based on category and search query
  const filterBooks = () => {
    let filtered = booksData.filter(
      (book) =>
        (category === "All" || book.category === category) &&
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return shuffleArray(filtered);
  };

  // Update filtered books when category or search query changes
  useEffect(() => {
    setFilteredBooks(filterBooks());
  }, [category, searchQuery]);

  const categories = [
    "All",
    "Investing",
    "Personal Finance",
    "Trading",
    "Personality",
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <header className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/dashboard">
            <img
              src="/logo_white_png.png"
              alt="Logo"
              className="w-16 h-10 shadow-sm bg-transparent cursor-pointer fixed"
            />
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search books..."
          className="p-2 rounded bg-gray-700 text-white w-1/3 "
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header> 

      <nav className="flex justify-center space-x-4 my-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              category === cat
                ? "bg-yellow-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setCategory(cat)} // Update category
          >
            {cat}
          </button>
        ))}
      </nav>

      <main className="mx-[10%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p className="text-gray-400">
                  {book.author} | {book.category}
                </p>
                <a
                  href={book.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:underline block mt-2"
                >
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">
            No books found for your search or category.
          </p>
        )}
      </main>
    </div>
  );
}

export default Elibrary;
