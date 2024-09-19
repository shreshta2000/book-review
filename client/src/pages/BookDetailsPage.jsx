// frontend/src/pages/BookDetailsPage.js  
import React, { useState, useEffect } from 'react';  
import { useParams } from 'react-router-dom';  
import BookDetails from '../components/BookDetails';  
import ReviewForm from '../components/ReviewForm';  
import ReviewList from '../components/ReviewList';  
import { getBookById } from '../services/bookService';  
import { getReviewsByBookId, createReview } from '../services/reviewService';  

function BookDetailsPage() {  
  const [book, setBook] = useState(null);  
  const [reviews, setReviews] = useState([]);  
  const { id } = useParams();  

  useEffect(() => {  
    const fetchBookAndReviews = async () => {  
      const fetchedBook = await getBookById(id);  
      setBook(fetchedBook);  
      const fetchedReviews = await getReviewsByBookId(id);  
      setReviews(fetchedReviews);  
    };  
    fetchBookAndReviews();  
  }, [id]);  

  const addReview = async (reviewData) => {  
    const newReview = await createReview({ ...reviewData, bookId: id });  
    setReviews([...reviews, newReview]);  
  };  

  if (!book) return <div>Loading...</div>;  

  return (  
    <div>  
      <BookDetails book={book} />  
      <ReviewForm onReviewAdded={addReview} />  
      <ReviewList reviews={reviews} />  
    </div>  
  );  
}  

export default BookDetailsPage;