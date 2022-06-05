var router = require('express').Router();
const { addPost, getAllBlogs } = require('../controller/blogs.controller')
router.post('/', addPost)
// router.get('/', getAllNotificatios)
// router.get('/:user', userNotificatios)



module.exports = router