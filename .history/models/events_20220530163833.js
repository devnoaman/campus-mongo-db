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
        type: DateTime,
        require: true
    },
    endTime: {
        type: DateTime,
        require: true
    },
    isAllDay: {
        type: Bool,
        require: true
    },
    isMultiDay: {
        type: Bool,
        require: true
    },
    isDone: {
        type: Bool,
        require: true
    },
},
    {
        timestamps: true,
    }
)