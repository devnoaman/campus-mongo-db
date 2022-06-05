var express = require('express');
var router = express.Router();
var { login, signup } = require('../controller/teacher.controller');

router.get('/login', login);
router.get('/login', login);


module.exports = router;