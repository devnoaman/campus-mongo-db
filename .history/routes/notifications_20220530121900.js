var { router } = require('../models/model.exports')

router.post('/', (req, res) => {
    res.send({
        message: "hello world"
    })
})
