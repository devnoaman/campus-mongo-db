var express = require('express');
var router = express.Router();
var { addDiscover, getAllDiscovers, update } = require('../controller/discover.controller');

router.post('/', addDiscover);
router.get('/', getAllDiscovers);
// router.post('/signup', signup);
// router.post('/update', update);


module.exports = router;