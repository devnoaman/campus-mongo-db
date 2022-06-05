var router = require('express').Router();
var { addNew ,getAllNews} = require('../controller/news.controller')
router.post('/', addNew)
router.get('/', getAllNews)


module.exports = router