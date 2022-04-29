const mongoose = require('mongoose');

//CAREER SCHEMA
const CareerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  level: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
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
