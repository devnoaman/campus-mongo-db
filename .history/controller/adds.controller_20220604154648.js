

var Adds = require('../models/Adds');
module.exports = {
    addAdd: (req, res) => {
        var body = req.body;

        if (
           
            !req.body.description ||
            !req.body.cover
        ) {
            res.send({
                message: "add required fields"
            })
        }


        Adds = new Adds(
            {

                
                description: body.description,
            
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
    },
    remove: (req, res) => {
        Events. findOneAndDelete({"_id":req.body.id})
            .then(result => {
                res.send({
                    Events: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }
}