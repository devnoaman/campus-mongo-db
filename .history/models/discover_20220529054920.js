const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const discoverSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    cover: {
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



var Discover = mongoose.model('Discover', discoverSchema);

module.exports = Discover;