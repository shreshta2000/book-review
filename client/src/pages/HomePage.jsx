import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { getAllBooks } from '../services/bookService';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getAllBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);
  console.log(books);
  return (
    <div>
      <h1>Book Review App</h1>
      <BookList books={books} />
    </div>
  );
}

export default HomePage;
