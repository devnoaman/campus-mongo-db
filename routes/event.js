var router = require('express').Router();
var { addEvent,getAllEvents ,remove} = require('../controller/events.controller')
router.post('/', addEvent)
router.get('/', getAllEvents)
router.delete('/', remove)


module.exports = router 