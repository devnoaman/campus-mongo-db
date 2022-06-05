const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Student = require('./models/student');

var cookieParser = require('cookie-parser');

const { MongoClient, ServerApiVersion } = require('mongodb');
// express app
var students = require('./routes/students');
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
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.use('/students', students);
// mongoose & mongo tests


app.get('/add-Student', (req, res) => {

  Student = new Student({
    firstName: 'new Student',
    secondName: 'about my new Student',
    thirdName: 'more about my new Student',
    forthName: 'more about my new Student',
    family: 'more about my new Student',
    stage: 'more about my new Student',
    division: 'more about my new Student',
    college: 'more about my new Student',
    department: 'more about my new Student',
    image: 'more about my new Student',

  })

  Student.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-Students', (req, res) => {
  Student.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-Student', (req, res) => {
  Student.findById('5ea99b49b8531f40c0fde689')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/Students');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Student routes
app.get('/Students/create', (req, res) => {
  res.render('create', { title: 'Create a new Student' });
});

app.get('/sstudents', (req, res) => {
  Student.find().sort({ createdAt: -1 })
    .then(result => {
      res.send({
        students: result
      }
      )
      // res.render('index', { Students: result, firstName: 'All Students' });
    })
    .catch(err => {
      console.log(err);
    });
});

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
