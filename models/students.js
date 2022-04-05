const mongoose = require('mongoose');
const Career = require('./career');

//STUDENT SCHEMA
const StudentSchema = new mongoose.Schema({
  controlNumber: {
    type: String,
    required: true,
    length: 8,
  },
  institutionalEmail: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  firstLastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  secondLastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  career: Career.schema,
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

module.exports = new mongoose.model('Student', StudentSchema);
