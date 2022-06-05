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
    description: {
        type: String,
        required: true
    },
    forthName: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
}, { timestamps: true });


// const Students = mongoose.model('Student', discoverSchema);
var Students = mongoose.model('Student', discoverSchema);

// const Student = mongoose.model('students', discoverSchema);
module.exports = Students;