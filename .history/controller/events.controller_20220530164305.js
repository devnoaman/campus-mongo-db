var Event = require('../models/events');


module.exports = {

    addEvent: (req, res) => {

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
        })

        Discover.save()
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    },
    searchDiscover: (req, res) => {
        console.log(req.query.q)
        Discover.find({ firstName: new RegExp(req.query.q, 'i') }, function (err, docs) {
            // cb(docs);
        })
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            });
    },
    getAllDiscovers: (req, res) => {
        Discover.find().sort({ createdAt: -1 })
            .then(result => {
                res.send({
                    length: result.length,
                    Discovers: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }
    ,

    stageDiscover: (req, res) => {
        Discover.find({ stage: new RegExp(req.query.stage, 'i'), division: new RegExp(req.query.division, 'i') }, function (err, docs) {
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