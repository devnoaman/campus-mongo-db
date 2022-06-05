var express = require('express');
var router = express.Router();
const sendNotify = require('../utils/send_notification')
// var { addDiscover, getAllDiscovers, update } = require('../controller/discover.controller');

router.post('/', sendNotify);
router.get('/', getAllDiscovers);

// router.post('/signup', signup);
// router.post('/update', update);


module.exports = router;