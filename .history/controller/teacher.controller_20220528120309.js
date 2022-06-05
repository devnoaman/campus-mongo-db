var Teacher = require('../models/teacher');

const { hashSync, compareSync } = require("bcrypt");

module.exports = {

    login: (req, res) => {

        if (
            !req.body.username ||
            !req.body.password


        ) {
            res.send({ message: "add required fields" })
        }




        Student.findOne()
            .then(result => {
                res.send(result);
            })
            .catch(err => {
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

    stageStudent: (req, res) => {
        Student.find({ stage: new RegExp(req.query.stage, 'i'), division: new RegExp(req.query.division, 'i') }, function (err, docs) {
            // cb(docs);
        })
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    },

}