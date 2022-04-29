const mongoose = require('mongoose');

//CAREER SCHEMA
const CareerSchema = new mongoose.Schema({
  careerName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  careerLevel: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  careerCreatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  careerModifiedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

/*
  {
		"careerName": "TICS",
		"careerLevel": "2",
		"careerCreatedAt": "hoy",
		"careerModifiedAt": "hoy"
  }
*/

module.exports = new mongoose.model('Career', CareerSchema);
