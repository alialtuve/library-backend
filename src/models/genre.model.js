const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
  name: {
    type:String, 
    required: true
  },
  books:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "books" 
  }],
});

const Genre = mongoose.model('genres', genreSchema);

module.exports = Genre;