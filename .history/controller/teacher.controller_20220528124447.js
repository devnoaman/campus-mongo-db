var Teacher = require('../models/teacher');

const { hashSync, compareSync } = require("bcrypt");
const { ReplSet } = require('mongodb');

module.exports = {
    signup: (req, res) => {

        if (
            !req.body.username ||
            !req.body.password

        ) {
            res.send({ message: "add required fields" })
        }




        Teacher = new Teacher({
            username: req.body.username,
            password: req.body.password,



        })

        Teacher.save()
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    },
    login: (req, res) => {

        if (
            !req.body.username ||
            !req.body.password


        ) {
            res.send({ message: "add required fields" })
        }




        Teacher.findOne({ username: req.body.username }, function (er, ad) { })
            .then(result => {
                if (!result) {
                    res.send(`there is no user name : ${req.body.username} `)
                }
                console.log(result)
                res.send(result);
            })
            .catch(err => {
                ReplSet.send(err)
                console.log(err);
            });
    },


    update: (req, res) => {

        if (
            !req.body.username



        ) {
            res.send({ message: "add required fields" })
        }




        Teacher.findOne({ username: req.body.username }, function (er, ad) { })
            .then(result => {
                if (!result) {
                    res.send(`there is no user name : ${req.body.username} `)
                }
                console.log(result)
                res.send(result);
            })
            .catch(err => {
                ReplSet.send(err)
                console.log(err);
            });
    },



    searchStudent: (req, res) => {
        console.log(req.query.q)
        Student.find({ firstName: new RegExp(req.query.q, 'i') }, function (err, docs) {
            // cb(docs);
        })
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    },



    getAllStudents: (req, res) => {
        Student.find().sort({ createdAt: -1 })
            .then(result => {
                res.send({
                    length: result.length,
                    students: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }
    ,



}