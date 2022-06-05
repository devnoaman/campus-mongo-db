const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  thirdName: {
    type: String,
    required: true
  },
  forthName: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },

  college: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

  stage: {
    type: String,
    required: true
  },

  division: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: false
  },
}, { timestamps: true });


var Students = mongoose.model('Student', teacherSchema);

module.exports = Students;