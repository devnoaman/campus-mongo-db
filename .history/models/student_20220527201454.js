const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;