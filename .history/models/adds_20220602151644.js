const mongoose = require('mongoose');

const AddSchema = new mongoose.Schema({
   
    description: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true,
    },
 
},
    {
        timestamps: true,
    }
);

var Add = mongoose.model('Adds', AddSchema);
module.exports = Add;