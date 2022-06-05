var express = require('express');
var router = express.Router();
var { login } = require('../controller/teacher.controller');

router.get('/login', login);

module.exports = router;