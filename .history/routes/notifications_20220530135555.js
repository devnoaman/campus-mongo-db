
var router = require('express').Router();
const { addNotification, getAllNotificatios } = require('../controller/notifications.controller')
router.post('/', addNotification)
router.get('/', addNotification)


module.exports = router