var express = require('express');
var router = express.Router();
var { addDiscover, getAllDiscovers, update } = require('../controller/discover.controller');

router.post('/', addDiscover);
router.get('/', getAllDiscovers);



module.exports = router;