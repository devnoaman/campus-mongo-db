var router = require('express').Router();
var { addPost } = require('../controller/events.controller')
router.post('/', addPost)
// router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router