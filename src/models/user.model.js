const mongoose = require('mongoose');

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
  requested:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "requestedbooks"
  }],
});

const User = mongoose.model('users', userSchema);

module.exports = User;