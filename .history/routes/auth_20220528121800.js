var express = require('express');
var router = express.Router();
var { login, signup } = require('../controller/teacher.controller');

router.post('/login', login);
router.post('/signup', signup);


module.exports = router;