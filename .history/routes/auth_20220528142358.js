var express = require('express');
var router = express.Router();
var { login, signup, update } = require('../controller/teacher.controller');

router.post('/login', login);
router.post('/signup', signup);
router.post('/update', update, () => {
    res.send({ "ffd": "dfdfdfdf" })
});


module.exports = router;