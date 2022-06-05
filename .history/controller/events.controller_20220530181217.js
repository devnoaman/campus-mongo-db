var Event = require('../models/events');


module.exports = {

    addNew: (req, res) => {

        if (
            !req.body.summary ||
            !req.body.description ||
            !req.body.location ||
            !req.body.startTime ||
            !req.body.endTime ||
            !req.body.isAllDay ||
            !req.body.isMultiDay ||
            !req.body.isDone


        ) {
            res.send({ message: "add required fields" })
        }

        var body = req.body;


        Event = new Event({
            summary: body.summary,
            description: body.description,
            location: body.location,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            isAllDay: req.body.isAllDay,
            isMultiDay: req.body.isMultiDay,
            isDone: req.body.isDone,
        })

        Event.save()
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    },


}