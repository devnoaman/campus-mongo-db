

var Blog = require('../models/blogs');
module.exports = {
    addPost: (req, res) => {

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

    }
}