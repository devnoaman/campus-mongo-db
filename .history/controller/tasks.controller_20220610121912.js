var Tasks = require('../models/tasks');


module.exports = {

    add: async (req, res) => {
console.log('this end point hitted')
        if (
            !req.body.user ||
            !req.body.title ||
            !req.body.location ||
            !req.body.startTime ||
            !req.body.endTime 
        ) {
            res.send({ message: "add required fields" })
        }

      


    new Tasks({
            user: req.body.user,
            summary: req.body.summary,
            description: req.body.description,
            location: req.body.location,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            isAllDay: req.body.isAllDay,
            isMultiDay: req.body.isMultiDay,
            isDone: req.body.isDone,
        })

     .save()
            .then(result => {
                res.send(result);
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            });
    },
    getAllTasks: (req, res) => {
        Tasks.find().sort({ createdAt: -1 })
            .then(result => {
                res.send({
                    length: result.length,
                    Tasks: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }, 
    remove: (req, res) => {
        Tasks. findOneAndDelete({"_id":req.body.id})
            .then(result => {
                res.send({
                    Tasks: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }


}