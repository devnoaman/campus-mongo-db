

var Adds = require('../models/Adds');
module.exports = {
    addAdd: (req, res) => {
        var body = req.body;

        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.sender
        ) {
            res.send({
                message: "add required fields"
            })
        }


        Adds = new Adds(
            {
                title: body.title,
                description: body.description,
                sender: body.sender,
                cover: body.cover


            }
        ).save()
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

    },
    getAllAdds: (req, res) => {
        Adds.find().sort({ createdAt: -1 })
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
    }
}