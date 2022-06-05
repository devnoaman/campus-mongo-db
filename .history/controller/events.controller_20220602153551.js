var Events = require('../models/events');


module.exports = {

    addNew: (req, res) => {

        if (
            !req.body.summary ||
            !req.body.description ||
            !req.body.location ||
            !req.body.startTime ||
            !req.body.endTime ||
            !req.body.user ||
            !req.body.isAllDay ||
            !req.body.isMultiDay ||
            !req.body.isDone


        ) {
            res.send({ message: "add required fields" })
        }

      


        Events = new Events({
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

        Events.save()
            .then(result => {
                // res.send(result);
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            });
    },
    getAllEvents: (req, res) => {
        Events.find().sort({ createdAt: -1 })
            .then(result => {
                res.send({
                    length: result.length,
                    Events: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }


}