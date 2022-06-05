const mongoose = require('mongoose');
const { Schema } = mongoose;


const AddSchema =  mongoose.Schema({
   
    description: {
        type: string,
        required: true
    },
    cover: {
        type: string,
        required: true,
    },
 
},
    {
        timestamps: true,
    }
);

var Add = mongoose.model('Adds', AddSchema);
module.exports = Add;