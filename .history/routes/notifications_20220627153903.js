
var router = require('express').Router();
const { addNotification, getAllNotificatios, userNotificatios } = require('../controller/notifications.controller')
router.post('/add', addNotification)
router.post('/', getAllNotificatios)
// router.get('/', getAllNotificatios)
// router.get('/:user', userNotificatios)



module.exports = router