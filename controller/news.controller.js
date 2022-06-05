

var News = require('../models/news');
module.exports = {
    addNew: (req, res) => {
        console.log('hitted this')
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


      new News(
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
    getAllNews: (req, res) => {
        News.find().sort({ createdAt: -1 })
            .then(result => {
                res.send({
                    length: result.length,
                    News: result
                }
                )

            })
            .catch(err => {
                console.log(err);
            });
    }
}