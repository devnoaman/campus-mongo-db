var router = require('express').Router();
var { addNew } = require('../controller/events.controller')
router.post('/', addNew)


module.exports = router