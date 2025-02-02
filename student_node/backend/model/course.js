// name duration  fee [hint category]

const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    duration: {type: String, required: true},
    fee: {type: Number, required: true},
  });
module.exports = mongoose.model('Course', courseSchema,"Course");

