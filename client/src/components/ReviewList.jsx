// frontend/src/components/ReviewList.js  
import React from 'react';  

const ReviewList = ({ reviews }) => {  
  return (  
    <div>  
      <h2>Reviews</h2>  
      {reviews.length === 0 ? (  
        <p>No reviews yet!</p>  
      ) : (  
        <ul>  
          {reviews.map((review, index) => (  
            <li key={index}>  
              <strong>Rating: {review.rating} stars</strong>  
              <p>{review.comment}</p>  
            </li>  
          ))}  
        </ul>  
      )}  
    </div>  
  );  
};  

export default ReviewList;