const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    summary: {
        type: String,
        require: true
    },
    description: {
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
    isAllDay: {
        type: bool,
        require: true
    },
    isMultiDay: {
        type: bool,
        require: true
    },
    isDone: {
        type: bool,
        require: true
    },
},
    {
        timestamps: true,
    }
);
var Events = mongoose.model('Event', eventSchema);
module.exports = Events;