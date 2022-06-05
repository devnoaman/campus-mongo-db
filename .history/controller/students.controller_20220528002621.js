

module.exports = {

    addStudent: (req, res) => {

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
                // res.render('index', { Students: result, firstName: 'All Students' });
            })
            .catch(err => {
                console.log(err);
            });
    }
}