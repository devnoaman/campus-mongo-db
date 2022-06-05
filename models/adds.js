var mongoose = require('mongoose');
var { Schema } = mongoose;


var AddSchema =  mongoose.Schema({
   
    description: {
        type: Schema.Types.String,
        required: true
    },
    cover: {
        type: Schema.Types.String,
        required: true,
    },
 
},
    {
        timestamps: true,
    }
);

var Add = mongoose.model('Add', AddSchema);
module.exports = Add;