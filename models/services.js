const mongoose = require('mongoose');

//SERVICE SCHEMA
const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  unitCost: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  modifiedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = new mongoose.model('Service', ServiceSchema);
