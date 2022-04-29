const mongoose = require('mongoose');
const Student = require('./students');
const Service = require('./services');

//TRANSACTION SCHEMA
const TransactionSchema = new mongoose.Schema({
  service: Service.Schema,
  student: Student.Schema,
  amount: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  modifiedAt: {
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
});

module.exports = new mongoose.model('Transaction', TransactionSchema);
