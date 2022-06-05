var express = require('express');
var router = express.Router();
var { login, signup, update } = require('../controller/teacher.controller');

router.post('/login', login);
router.post('/signup', signup, (req, res, err) => {

    res.send({ "ffd": err })
});
router.post('/update', update);


module.exports = router;