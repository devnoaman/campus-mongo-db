const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
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
    }
);

var News = mongoose.model('News', newsSchema);
module.exports = News;