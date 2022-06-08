var router = require('express').Router();
var { addApp,getAllApps } = require('../controller/apps.controller')
router.post('/', addApp)
router.get('/', getAllApps)


module.exports = router 