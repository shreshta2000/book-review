require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  module.exports = app;
  