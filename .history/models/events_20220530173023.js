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
        type: Boolean,
        require: true
    },
    isMultiDay: {
        type: Boolean,
        require: true
    },
    isDone: {
        type: Boolean,
        require: true
    },
},
    {
        timestamps: true,
    }
);
var Events = mongoose.model('Event', eventSchema);
module.exports = Events;