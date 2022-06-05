

var Blogs = require('../models/blogs');
module.exports = {
    addPost: (req, res) => {
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


        Blogs = new Blogs(
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
    getAllBlogs: (req, res) => {
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
}