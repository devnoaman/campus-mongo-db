const express = require('express');
const morgan = require('morgan');
var cors = require('cors')

// var logger = require('morgan');
// var bodyParser = require('body-parser');

// var path = require('path');
var cookieParser = require('cookie-parser');
// express app
var students = require('./routes/students');
var blogs = require('./routes/blogs');
var adds = require('./routes/adds');
var eventRoute = require('./routes/event');
var authRoute = require('./routes/auth');
var discoverRoute = require('./routes/discover');
var servicesRoute = require('./routes/services');
var notificationsRoute = require('./routes/notifications');
var newsRoute = require('./routes/news');
// const { add } = require('lodash');
const app = express();
// connect to mongodb & listen for requests
// register view engine
app.set('view engine', 'ejs');
// middleware & static files
app.use(express.static('public'));
app.use(cors())

// app.use(morgan('dev'));

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.json())

app.use('/news', newsRoute);
app.use('/students', students);
app.use('/blogs', blogs);
app.use('/auth', authRoute);
app.use('/event', eventRoute);
app.use('/discover', discoverRoute);
app.use('/service', servicesRoute);
app.use('/notifications', notificationsRoute);
app.use('/adds', adds);
// app.use(express.static('public'))
const path = require('path')
var assetsPath = path.join(__dirname, 'public');
app.use('/public',express.static(assetsPath));

// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static('public'))

// app.use(express.static(path.join(__dirname, 'public')));

// mongoose & mongo tests

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log(`app run on port ${port}`)

