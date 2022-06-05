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
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;