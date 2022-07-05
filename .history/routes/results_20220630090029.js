var router = require('express').Router();
var {add,remove,getAll} = require('../controller/results.controller')
router.post('/', add);
router.get('/', getAll)
router.delete('/', remove)


// router.get('/:user', userNotificatios)

 

module.exports = router