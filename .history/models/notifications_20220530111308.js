const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;


const notificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sender: {
        type: String,
    },
    to: {
        type: String
    }

}, { timestamps: true })
var Notification = mongoose.model('Student', notificationSchema);

module.exports = Notification;