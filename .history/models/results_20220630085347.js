var mongoose = require('mongoose');
var { Schema } = mongoose;


var ResultsSchema =  mongoose.Schema({
   
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

var Results = mongoose.model('Results', ResultsSchema);
module.exports = Results;