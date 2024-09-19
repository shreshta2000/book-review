// frontend/src/components/BookList.js  
import React from 'react';  
import { Link } from 'react-router-dom';  

const BookList = ({ books }) => {  
  return (  
    <div>  
      <h2>Book List</h2>  
      <ul>  
        {books.map((book) => (  
          <li key={book._id}>  
            <h3>{book.title}</h3>  
            <p>Author: {book.author}</p>  
            <p>Description: {book.description}</p>  
            {book.imageUrl && <img src={book.imageUrl} alt={`${book.title} cover`} style={{ width: '100px', height: '150px' }} />}  
            <Link to={`/books/${book._id}`}>  
              <button>View Reviews</button>  
            </Link>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default BookList;