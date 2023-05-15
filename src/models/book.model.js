const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  published: String,
  genre: String
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;