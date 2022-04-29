const mongoose = require('mongoose');
const Career = require('./careers');

//STUDENT SCHEMA
const StudentSchema = new mongoose.Schema({
  studentControlNumber: {
    type: String,
    required: true,
    length: 8,
  },
  studentInstitutionalEmail: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 50,
  },
  studentName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  studentFirstLastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  studentSecondLastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  career: Career.schema,
  studentCreatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  studentModifiedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = new mongoose.model('Student', StudentSchema);
