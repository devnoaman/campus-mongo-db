var router = require('express').Router();
const addddEvent = require('../controller/events.controller')
router.post('/', addddEvent)
// router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router