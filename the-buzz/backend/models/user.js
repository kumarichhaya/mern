const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
  name: {type: String, required: true},
    email: {type: String, required: true},

    password: {type: String, required: true},
    
    phone: {type: String, default:""},
    city: {type: String, default:""},
    
    gender: {type: String, default:""},
    dob: {type: Date, default:""},
    
    bio: {type: String, default:""}, 

    image: {type: String, default:""},
    date:{type:Date,default:Date.now()}
  });
  
module.exports = mongoose.model('User', userSchema,"User");
