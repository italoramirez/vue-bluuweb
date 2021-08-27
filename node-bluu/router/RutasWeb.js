  const express = require('express');
  const router = express.Router();

router.get('/', (req, res) => {
    // res.send('index');
    res.render('index', {title: 'dinámico'});
})

router.get('/servicios', (req, res) => {
    // res.send('index');
    res.render('servicios', {title: 'servicios'});
})

module.exports = router;