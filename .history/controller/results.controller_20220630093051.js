
var ResultsModel = require('../models/results');
var db = require('../database')
module.exports = {
    add: async (req, res) => {
        var body = req.body;

        if (

            !req.body.firstName ||
            !req.body.secondName ||
            !body.thirdName ||
            !body.forthName ||
            !body.stage ||
            !body.dividion ||
            !body.department ||
            !body.userId

        ) {
            res.send({
                message: "add required fields"
            })
        }

        try {
            var msg = await new ResultsModel(
                {
                    // description: body.description,
                    // cover: body.cover


                    firstName:body.firstName,
                    userId: body.userId,
                    secondName: body.secondName,
                    thirdName:body.thirdName,
                    forthName:body.forthName,
                    stage: body.stage,
                    division: body.division,
                    department:body.department,
                    results:body.results,
                  
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
                    Result: result
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
                    Result: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
        client.close();

    }
}