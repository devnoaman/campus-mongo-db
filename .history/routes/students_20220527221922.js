var express = require('express');
var router = express.Router();
var studentUtail = require('../controller/students.controller')

/* GET users listing. */
router.get('/', studentUtail.searchStudent

);

module.exports = router;