var router = require('express').Router();
var { addNew,get } = require('../controller/events.controller')
router.post('/', addNew)
router.get('/', addNew)


module.exports = router