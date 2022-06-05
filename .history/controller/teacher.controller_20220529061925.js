var Teacher = require('../models/teacher');

const { hashSync, compareSync } = require("bcrypt");
const { ReplSet } = require('mongodb');
bcrypt = require('bcrypt');
var hash = '';
module.exports = {

    signup: async (req, res) => {
        console.log('hitted this point')
        if (
            !req.body.username ||
            !req.body.password

        ) {
            // next('add required fields', null, res)
            res.send({ message: "add required fields" })
        }
        // bcrypt.genSalt(10, function (err, salt) {
        //     bcrypt.hash(req.body.password, salt, function (err, hash) {

        //         console.log(hash)


        //     });
        // });


        // generate a salt
        var salt = await bcrypt.genSalt(10).catch(err => {
            res.status(500).json({ message: 'Internal server error' });
        });


        // hash the password using our new salt
        hash = await bcrypt.hash(req.body.password, salt
        ).catch(err => {
            res.status(500).json({ message: 'Internal server error' });
        });


        Teacher = new Teacher({
            username: req.body.username,
            password: hash
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
                bcrypt.compare(req.body.password, hash, function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    res.send("done")
                    // Use your response
                });
                console.log(result)
                // res.send(result);
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
            .then(async (result) => {
                if (!result) {
                    res.send(`there is no user name : ${req.body.username} `)
                }
                if (req.body.firstName) {
                    result.firstName = req.body.firstName;

                }
                if (req.body.secondName) {
                    result.secondName = req.body.secondName;

                }
                if (req.body.thirdName) {
                    result.thirdName = req.body.thirdName;

                }
                if (req.body.forthName) {
                    result.forthName = req.body.forthName;

                }
                if (req.body.family) {
                    result.family = req.body.family;

                }
                if (req.body.college) {
                    result.college = req.body.college;

                }
                if (req.body.department) {
                    result.department = req.body.department;

                }
                if (req.body.stage) {
                    result.stage = req.body.stage;

                }
                if (req.body.division) {
                    result.division = req.body.division;

                }

                await result.save();

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