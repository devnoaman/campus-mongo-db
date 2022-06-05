



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
        Notifications = new Notifications(
            {
                title: req.body.title,
                description: req.body.description,
                sender: req.body.description
            }
        )
        Notifications.save()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                console.log(err)
            })

    }
}