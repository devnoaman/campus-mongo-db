const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    location: { 
        type: String,
        require: true
    },
    startTime: {
        type: String,
        require: true
    },
    endTime: {
        type: String,
        require: true
    },
    day: {
        type: String,
        require: true
    },
    
},
    {
        timestamps: true,
    }
);
var Events = mongoose.model('Tasks', taskSchema);
module.exports = Events;