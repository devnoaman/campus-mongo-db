



var Notifications = require('../models/notifications')


module.exports = {
    addNotification: (req, res) => {
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.sender


        ) {
            res.send({ message: "all fields are required" })

        }
    }
}