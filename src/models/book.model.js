const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type:String, 
    required: true
  },
  author: {
    type:String, 
    required: true
  },
  published: {
    type:Number,
  },
  genre: {
    type:String, 
  },
  stock: {
    type:Number, 
    required: true
  },
  available: {
    type:Number,
  },
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;