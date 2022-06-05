var express = require('express');
var router = express.Router();
var { addDiscover, signup, update } = require('../controller/discover.controller');

router.post('/', addDiscover);
router.post('/signup', signup);
router.post('/update', update);


module.exports = router;