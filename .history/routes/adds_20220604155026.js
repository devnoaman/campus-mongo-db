var router = require('express').Router();
var {addAdd,getAllAdds,remove} = require('../controller/adds.controller')
router.post('/', addAdd);
router.get('/', getAllAdds)
router.delete('/', remove)


// router.get('/:user', userNotificatios)

 

module.exports = router