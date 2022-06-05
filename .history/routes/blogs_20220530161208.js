var router = require('express').Router();
const { addPost } = require('../controller/blogs.controller')
router.post('/', addPost)
router.get('/', getAllNotificatios)
// router.get('/:user', userNotificatios)



module.exports = router