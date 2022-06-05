



var Notifications = require('../models/notifications')
const { getAllStudents } = require('./students.controller')


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
                sender: req.body.description,
                to: req.body.to
            }
        )
        Notifications.save()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    getAllNotificatios: (req, res) => {
        Notifications.find().sort({ createdAt: -1 })
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
        Notifications.find().sort({ to: user })
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