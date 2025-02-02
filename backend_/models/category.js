const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    category: {type: String, required: true},
    icon: {type: String, required: true},
    short_desc: {type: String, required: true},
  });
  
module.exports = mongoose.model('Category', categorySchema,"Category");

