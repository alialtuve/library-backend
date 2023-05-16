const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; 

const userSchema = mongoose.Schema({
  name: {
    type:String,
    trim: true, 
    required: true
  },
  lastname: {
    type:String,
    trim: true, 
    required: true
  },
  email: {
    type:String,
    trim: true, 
    required: true,
    index:{unique:true}
  },
  password: {
    type:String,
    trim: true, 
    required: true
  },
  role: {
    type:String,
    trim: true, 
    required: true
  },
  active: {
    type:Boolean,
    default: true 
  },
});

const Book = mongoose.model('users', userSchema);

module.exports = Book;