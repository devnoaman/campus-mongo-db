

const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://campus:campus1001@cluster0.9kyai.mongodb.net/campus?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");

var client = new MongoClient(process.env.MONGODB_URI || dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

  .catch(err => console.log(err));

module.exports={client}