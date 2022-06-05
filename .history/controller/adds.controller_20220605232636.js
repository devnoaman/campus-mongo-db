

var Adds = require('../models/Adds');

module.exports = {
    addAdd:async (req, res) => {
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
    Adds =await  new Adds(
        {

            
            description: body.description,
        
            cover: body.cover


        }
    );
} catch (err) {
    console.log(err)
}
       
        
        
        Adds.  save()
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
        Adds.find()
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
        Adds. findOneAndDelete({"_id":req.body.id})
            .then(result => {
                res.send({
                    Adds: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }
}