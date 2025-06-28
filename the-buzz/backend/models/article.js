const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({ 
    title: {type: String, required: true}, //book read
    category: {type: String, required: true},// cid
    image: {type: String, required: true}, //img
    content: {type: String, required: true},  //text
    user: {type: String, required: true},//uid 

    date:{type:Date,default:Date.now()}, // cd 
    publish: {type: Boolean, default:false},
  });
  
module.exports = mongoose.model('Article', articleSchema,"Article");
