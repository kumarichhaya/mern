const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
  name: {type: String, required: true},
    email: {type: String, required: true},

    password: {type: String, required: true},
    
    phone: {type: String, default:null},
    city: {type: String, default:null},
    
    gender: {type: String, default:null},
    dob: {type: Date, default:null},
    
    bio: {type: String, default:null}, 

    image: {type: String, default:null},
    date:{type:Date,default:Date.now()}
  });
  
module.exports = mongoose.model('User', userSchema,"User");
