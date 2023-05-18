const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: {
    type:String, 
    required: true
  },
  country: {
    type:String, 
  },
});

const Author = mongoose.model('authors', authorSchema);

module.exports = Author;