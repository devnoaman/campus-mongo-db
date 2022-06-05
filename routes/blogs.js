var router = require('express').Router();
var {add,getAllBlogs} = require('../controller/blogs.controller')
router.post('/', add);
router.get('/', getAllBlogs)
// router.get('/:user', userNotificatios)



module.exports = router