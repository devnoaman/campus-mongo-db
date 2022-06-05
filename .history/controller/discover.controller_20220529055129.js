var Discover = require('../models/discover');


module.exports = {

    addDiscover: (req, res) => {

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




        Discover = new Discover({
            title: req.body.title,
            description: req.body.description,
            cover: req.body.cover,
            sender: req.body.sender,



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