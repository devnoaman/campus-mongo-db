var router = require('express').Router();
const { addNotification, getAllNotificatios, userNotificatios } = require('../controller/blogs.controller')
router.post('/', addNotification)
router.get('/', getAllNotificatios)
// router.get('/:user', userNotificatios)



module.exports = router