var Teacher = require('../models/teacher');

const { hashSync, compareSync } = require("bcrypt");
const { ReplSet } = require('mongodb');
bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
module.exports = {
    signup: (req, res) => {
        console.log('hitted this point')
        if (
            !req.body.username ||
            !req.body.password

        ) {
            // next('add required fields', null, res)
            res.send({ message: "add required fields" })
        }


        var pass = ''





        //  // generate a salt
        //                 bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        //                     if (err) return next(err);

        //                     // hash the password using our new salt
        //                     bcrypt.hash(user.password, salt, function (err, hash) {
        //                         if (err) return next(err);

        //                         // override the cleartext password with the hashed one
        //                         user.password = hash;

        //                     });
        //                 });


        Teacher.findOne({ username: req.body.username }, function (er, ad) { })
            .then(result => {
                if (result) {
                    res.send(`there is user name : ${req.body.username} `)
                }
                // 
                // if (result.isModified('password')) {
                //     res.send('password modified')
                // }




                console.log(result)
                res.send(result);
            })
            .catch(err => {
                ReplSet.send(err)
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