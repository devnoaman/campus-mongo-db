var router = require('express').Router();
var { add,getTaskByDay ,remove} = require('../controller/tasks.controller')
router.post('/', add)
router.post('/:day', getTaskByDay)
router.delete('/', remove)


module.exports = router 