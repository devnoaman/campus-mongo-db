

var Blog = require('../models/blogs');
module.exports = {
    addPost: (req, res) => {
        var body = req.body;

        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.cover ||
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
        )

    }
}