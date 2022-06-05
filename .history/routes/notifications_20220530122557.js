
var router = require('express').Router();

router.post('/', (req, res) => {
    res.send({
        message: "hello world"
    })
})


module.exports = router