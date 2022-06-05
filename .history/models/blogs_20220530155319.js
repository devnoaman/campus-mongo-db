const mongoose = require('mongose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
})