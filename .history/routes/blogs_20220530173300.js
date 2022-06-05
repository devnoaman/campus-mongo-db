var router = require('express').Router();
const { addEvent } = require('../controller/events.controller')
router.post('/', addEvent)
// router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router