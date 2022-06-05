var router = require('express').Router();
var { addPost } = require('../controller/events.controller')
router.post('/', addPost)


module.exports = router