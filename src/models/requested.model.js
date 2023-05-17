const mongoose = require('mongoose');

const requestedSchema = mongoose.Schema({
  book:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "books" 
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users" 
  },
  status: { //returned: true - no returned : false
    type:Boolean, 
    default: false
  },
  borrowDate: {
    type: Date, 
  },
  returnDate: {
    type: Date, 
  },
});

const Requested = mongoose.model('requested', requestedSchema);

module.exports = Requested;