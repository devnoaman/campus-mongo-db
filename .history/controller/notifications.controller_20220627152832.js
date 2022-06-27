



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
        new Notifications(
            {
                title: req.body.title,
                description: req.body.description,
                sender: req.body.sender,
                to: req.body.to
            }
        )
        .save()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    getAllNotificatios: (req, res) => {
        console.log(req.body.user)
        var user = req.body.user
        console.log(user)
        var filter = (user == null) ? null : { to: user || "" }

        Notifications.find(filter).sort({ createdAt: -1 })
            .then(result => {
                res.send(
                    {
                        length: result.length,
                        Notifications: result
                    }
                )
            })
    },
    userNotificatios: (req, res) => {

        var user = req.params.user
        console.log(req.params.user)



        Notifications.find({ to: `${user}` }).sort({ createdAt: -1 })
            .then(result => {
                res.send(
                    {
                        length: result.length,
                        Notifications: result
                    }
                )
            })
    }



}