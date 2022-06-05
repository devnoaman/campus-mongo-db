
var router = require('express').Router();
const { addNotification, getAllNotificatios, userNotificatios } = require('../controller/notifications.controller')
router.post('/', addNotification)
router.get('/?:user', getAllNotificatios)
// router.get('/:user', userNotificatios)



module.exports = router