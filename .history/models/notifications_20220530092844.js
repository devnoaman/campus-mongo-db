const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;


const notificationSchema = new Schema({}, { timestamps: true })
var Notification = mongoose.model('Student', Notificationchema);

module.exports = Notification;