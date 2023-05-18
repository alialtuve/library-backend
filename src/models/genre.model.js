const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
  name: {
    type:String, 
    required: true
  },
});

const Genre = mongoose.model('genres', genreSchema);

module.exports = Genre;