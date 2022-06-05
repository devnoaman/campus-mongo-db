var router = require('express').Router();
var { addNew,getAllEvents } = require('../controller/events.controller')
router.post('/', addNew)
router.get('/', getAllEvents)


module.exports = router