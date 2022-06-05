var router = require('express').Router();
var addddEvent = require('../controller/events.controller')
router.get('/', addddEvent);
// router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router