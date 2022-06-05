const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: false
    }
},
    {
        timestamps: true,
        versionKey: '_somethingElse'
    },
);

var Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;