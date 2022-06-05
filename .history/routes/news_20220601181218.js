var router = require('express').Router();
var { addNew } = require('../controller/news.controller')
router.post('/', addNew)


module.exports = router