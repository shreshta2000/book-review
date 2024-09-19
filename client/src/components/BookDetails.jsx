// frontend/src/components/BookDetails.js  
import React from 'react';  

const BookDetails = ({ book }) => {  
  return (  
    <div>  
      <h1>{book.title}</h1>  
      <h3>Author: {book.author}</h3>  
      <p>Description: {book.description}</p>  
      {book.coverImage && <img src={book.coverImage} alt={`${book.title} cover`} style={{ width: '200px', height: '300px' }} />}  
    </div>  
  );  
};  

export default BookDetails;