var Student = require('../models/student');


module.exports = {

    addStudent: (req, res) => {

        if (
            !req.body.firstName ||
            !req.body.secondName ||
            !req.body.thirdName ||
            !req.body.forthName ||
            !req.body.family ||
            !req.body.college ||
            !req.body.department ||
            !req.body.stage ||
            !req.body.division


        ) {
            res.send({ message: "add required fields" })
        }




        Student = new Student({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            thirdName: req.body.thirdName,
            forthName: req.body.forthName,
            family: req.body.family,
            stage: req.body.stage,
            division: req.body.division,
            college: req.body.college,
            department: req.body.department


        })

        Student.save()
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
}