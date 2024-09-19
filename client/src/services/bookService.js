import axios from 'axios';  

// const API_URL = import.meta.env.VITE_API_URL;   

const API_URL = 'http://localhost:5000/api';
console.log('API URL:', API_URL);  

export const getAllBooks = async () => {  
  const response = await axios.get(`${API_URL}/books`);  
  return response.data;  
};  

export const getBookById = async (id) => {  
  const response = await axios.get(`${API_URL}/books/${id}`);  
  return response.data;  
};  