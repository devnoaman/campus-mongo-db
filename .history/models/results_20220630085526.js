var mongoose = require('mongoose');
var { Schema } = mongoose;


var ResultsSchema =  mongoose.Schema({
   
    firstName: {
        type: Schema.Types.String,
        required: true
    },
    secondName: {
        type: Schema.Types.String,
        required: true
    },
    thirdName: {
        type: Schema.Types.String,
        required: true
    },
    forthName: {
        type: Schema.Types.String,
        required: true
    },
    stage: {
        type: Schema.Types.String,
        required: true
    },
    division: {
        type: Schema.Types.String,
        required: true
    },
    department: {
        type: Schema.Types.String,
        required: true
    },
  
 
},
    {
        timestamps: true,
    }
);

var Results = mongoose.model('Results', ResultsSchema);
module.exports = Results;