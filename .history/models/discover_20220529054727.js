const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const discoverSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },

}, { timestamps: true });


// const Students = mongoose.model('Student', discoverSchema);
var Students = mongoose.model('Student', discoverSchema);

// const Student = mongoose.model('students', discoverSchema);
module.exports = Students;