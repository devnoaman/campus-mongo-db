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
            !req.body.division ||
    
    
    )




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
    },
    searchStudent: (req, res) => {

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