var router = require('express').Router();
var {add,remove,getAll,search} = require('../controller/results.controller')
router.post('/', add);
router.post('/search', search);
router.get('/', getAll);

router.delete('/', remove);


// router.get('/:user', userNotificatios)

 

module.exports = router