const router = require('express').Router();

router.post('/', async (req, res) => {
    res.json({
        error: null,
        data: 'data de resgitro'
    })
})

module.exports = router;