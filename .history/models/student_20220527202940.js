// const mongoose = require('mongoose');
import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const StudentSchema = new Schema({
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
    required: true
  },
}, { timestamps: true });

const Student = model('Student', StudentSchema);
export default Student;