var router = require('express').Router();
const { addPost } = require('../controller/events.controller')
router.post('/', addPost)
// router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router