import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

function BookCard({ book }) {
  const saveBook = async () => {
    await db.collection('savedBooks').add(book);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg mt-2">{book.title}</h3>
      <p className="text-sm text-gray-400">{book.author}</p>
      <p className="text-sm text-gray-500">{book.source}</p>

      <button
        onClick={saveBook}
        className="mt-2 text-yellow-500 hover:text-yellow-300"
      >
        <i className="fas fa-bookmark"></i> Save
      </button>
    </div>
  );
}

export default BookCard;
