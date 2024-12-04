import React from 'react';

function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      className="px-4 py-2 rounded-md"
      placeholder="Search books..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
