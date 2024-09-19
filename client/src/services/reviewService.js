import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createReview = async (reviewData) => {
  const response = await axios.post(`${API_URL}/reviews`, reviewData);
  return response.data;
};

export const getReviewsByBookId = async (bookId) => {
  const response = await axios.get(`${API_URL}/reviews/book/${bookId}`);
  return response.data;
};