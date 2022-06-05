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



var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.use('/students', students);
// mongoose & mongo tests




app.post("/upload", function (request, response) {
  // request.files will contain the uploaded file(s),                                          
  // keyed by the input name (in this case, "file")                                            

  // show the uploaded file name                                                               
  console.log("file name", request.files.file.name);
  console.log("file path", request.files.file.path);

  response.end("upload complete");
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
/** Permissible loading a single file, 
    the value of the attribute "name" in the form of "recfile". **/
var type = upload.single('recfile');
// app.post('/upload', type, function (req, res) {

//   /** When using the "single"
//       data come in "req.file" regardless of the attribute "name". **/
//   var tmp_path = req.file.path;

//   /** The original name of the uploaded file
//       stored in the variable "originalname". **/
//   var target_path = 'uploads/' + req.file.originalname;

//   /** A better way to copy the uploaded file. **/
//   var src = fs.createReadStream(tmp_path);
//   var dest = fs.createWriteStream(target_path);
//   src.pipe(dest);
//   src.on('end', function () { res.render('complete'); });
//   src.on('error', function (err) { res.render('error'); });

// });

app.post('/image', upload.single('attr'), (req, res, next) => {
  console.log(req)
  // var obj = {
  //   name: req.body.name,
  //   desc: req.body.desc,
  //   img: {
  //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
  //     contentType: 'image/png'
  //   }
  // }
  // imgModel.create(obj, (err, item) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     // item.save();
  //     res.redirect('/');
  //   }
  // });
});

app.get('/img', (req, res) => {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    }
    else {
      res.render('imagesPage', { items: items });
    }
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
