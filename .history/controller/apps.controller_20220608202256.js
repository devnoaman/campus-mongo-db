var Apps = require('../models/apps');


module.exports = {

    addApp: async (req, res) => {
console.log('this end point hitted')
        if (
            !req.body.title ||
            !req.body.link ||
            !req.body.img 
        ) {
            res.send({ message: "add required fields" })
        }

      


    new Apps({
            title: req.body.title,
            link: req.body.link,
            img: req.body.img,
            
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
    getAllApps: (req, res) => {
        Apps.find().sort({ createdAt: -1 })
            .then(result => {
                res.send({
                    length: result.length,
                    Apps: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }, 
    remove: (req, res) => {
        Apps. findOneAndDelete({"_id":req.body.id})
            .then(result => {
                res.send({
                    Apps: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }


}