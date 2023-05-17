const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: {
    type:String, 
    required: true
  },
  country: {
    type:String, 
  },
  books:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "books" 
  }],
});

const Author = mongoose.model('authors', authorSchema);

module.exports = Author;