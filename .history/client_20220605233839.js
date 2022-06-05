

const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://campus:campus1001@cluster0.9kyai.mongodb.net/campus?retryWrites=true&w=majority";

var client = mongoose.connect(process.env.MONGODB_URI || dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

  .catch(err => console.log(err));

module.exports={client}