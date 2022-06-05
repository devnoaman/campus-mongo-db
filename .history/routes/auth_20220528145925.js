var express = require('express');
var router = express.Router();
var { login, signup, update } = require('../controller/teacher.controller');

router.post('/login', login);
router.post('/signup', signup, (err, user) => {
    // console.log(req)
    if (err) {
        console.log(err);
        res.send(err)
    }
    // res.send(req)
    res.send({ "ffd": "dfdfdfdf" })
});
router.post('/update', update);


module.exports = router;