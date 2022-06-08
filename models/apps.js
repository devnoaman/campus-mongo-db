const mongoose = require('mongoose');

const appsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    
},
    {
        timestamps: true,
    }
);
var Apps = mongoose.model('App', appsSchema);
module.exports = Apps;