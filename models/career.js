const mongoose = require('mongoose');

//STUDENT SCHEMA
const CareerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  level: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  modifiedAt: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
});

module.exports = new mongoose.model('Career', CareerSchema);
