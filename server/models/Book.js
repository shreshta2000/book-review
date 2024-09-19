const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({  
 
  title: { type: String, required: true, unique: true }, // unique constraint  
  author: { type: String, required: true },  
  description: { type: String },  
  imageUrl: { type: String }  
});  

module.exports = mongoose.model('Book', BookSchema);