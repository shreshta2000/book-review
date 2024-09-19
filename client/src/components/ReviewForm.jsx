// frontend/src/components/ReviewForm.js  
import React, { useState } from 'react';

const ReviewForm = ({ onReviewAdded }) => {
  const [rating, setRating] = useState(1); // Default rating  
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return; // Ignore empty submissions  
    onReviewAdded({ rating, comment });
    setComment(''); // Clear the input field after submission  
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Leave a Review</h4>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star + "⭐".repeat(star)}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;