var router = require('express').Router();
var {addAdd,getAllAdds} = require('../controller/adds.controller')
router.post('/', addAdd);
router.get('/', getAllAdds)
// router.get('/:user', userNotificatios)

 

module.exports = router