var router = require('express').Router();
var { addEvent,getAllEvents } = require('../controller/events.controller')
router.post('/', addEvent)
router.get('/', getAllEvents)


module.exports = router