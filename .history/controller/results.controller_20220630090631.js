
var ResultsModel = require('../models/results');
var db = require('../database')
module.exports = {
    add: async (req, res) => {
        var body = req.body;

        if (

            !req.body.description ||
            !req.body.cover
        ) {
            res.send({
                message: "add required fields"
            })
        }

        try {
            var msg = await new ResultsModel(
                {
                    description: body.description,
                    cover: body.cover
                }
            );
            msg.save()
                .then(
                    result => {
                        res.send(
                            {
                                result
                            }
                        )
                    })
                .catch(
                    err => {
                        console.log(err);
                    }
                )
        } catch (error) {
            console.log(`connect error: ${error}`);
        }
   },
    getAll: (req, res) => {
        ResultsModel.find()
            .then(result => {
                res.send({
                    length: result.length,
                    Adds: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    },
    remove: (req, res) => {
                  



        ResultsModel.findOneAndDelete({ "_id": req.body.id })
            .then(result => {
                res.send({
                    Adds: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
        client.close();

    }
}