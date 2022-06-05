const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  secondName: {
    type: String,
    required: false
  },
  thirdName: {
    type: String,
    required: false
  },
  forthName: {
    type: String,
    required: false
  },
  family: {
    type: String,
    required: false
  },

  college: {
    type: String,
    required: false
  },

  department: {
    type: String,
    required: false
  },

  stage: {
    type: String,
    required: false
  },

  division: {
    type: String,
    required: false
  },

  image: {
    type: String,
    required: false
  },
}, { timestamps: true });


var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;