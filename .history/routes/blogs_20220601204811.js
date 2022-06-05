var router = require('express').Router();
var {addPost,getAllBlogs} = require('../controller/events.controller')
router.get('/', addPost);
// router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router