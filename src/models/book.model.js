const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type:String, 
    required: true
  },
  published: {
    type:Number,
  },
  stock: {
    type:Number, 
    required: true
  },
  available: {
    type:Number,
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors" 
  },
  genre:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "genres"
  },
  requested:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "requested"
  }],
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;