
var router = require('express').Router();
const { addNotification } = require('../controller/notifications.controller')
router.post('/', addNotification)


module.exports = router