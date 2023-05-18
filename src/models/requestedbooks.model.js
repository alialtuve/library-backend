const mongoose = require('mongoose');

const requestedbookSchema = mongoose.Schema({
  book:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
    required: true,
  },
  status: { //returned: true - no returned : false
    type:Boolean, 
    default: false
  },
  borrowDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date, 
  },
});

const RequestedBook = mongoose.model('requestedbooks', requestedbookSchema);

module.exports = RequestedBook;