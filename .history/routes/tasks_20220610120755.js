var router = require('express').Router();
var { add,getAllEvents ,remove} = require('../controller/tasks.controller')
router.post('/', add)
// router.get('/', getAllEvents)
// router.delete('/', remove)


module.exports = router 