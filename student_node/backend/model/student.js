// student - name course  image email phone date active [hint article]

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({ 
    name: {type: String, required: true}, 
    course: {type: String, required: true},
    email: {type: String, required: true}, 
    phone: {type: String, required: true},  
    image: {type: String, required: true},
    date:{type:Date,default:Date.now()}, 
    active: {type: Boolean, default:false},
  });
  
module.exports = mongoose.model('Student', studentSchema,"Student");
