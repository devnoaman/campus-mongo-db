const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Student = require('./models/student');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
const { ServerApiVersion } = require('mongodb');
// express app
var students = require('./routes/students');
// var blogs = require('./routes/blogs');
var eventRoute = require('./routes/event');
var authRoute = require('./routes/auth');
var discoverRoute = require('./routes/discover');
var servicesRoute = require('./routes/services');
var notificationsRoute = require('./routes/notifications');
var newsRoute = require('./routes/news');
const app = express();
// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://campus:campus1001@cluster0.9kyai.mongodb.net/campus?retryWrites=true&w=majority";
// register view engine
app.set('view engine', 'ejs');
// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json())

app.use('/students', students);
// app.use('/blogs', blogs);
app.use('/auth', authRoute);
app.use('/event', eventRoute);
app.use('/discover', discoverRoute);
app.use('/service', servicesRoute);
app.use('/notifications', notificationsRoute);
// mongoose & mongo tests

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  .then(result => {
    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`app run on port ${port}`)
  })
  .catch(err => console.log(err));
