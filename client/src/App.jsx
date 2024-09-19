// frontend/src/App.jsx  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import HomePage from './pages/HomePage';  
import BookDetailsPage from './pages/BookDetailsPage';  
import './App.css'; // Import the CSS file  

function App() {  
  return (  
    <Router>  
      <div className="container">  
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path="/books/:id" element={<BookDetailsPage />} />  
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;