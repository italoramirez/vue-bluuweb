const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res) => {

    try {
        const arrayMascotasDb = await Mascota.find();
        console.log(arrayMascotasDb)
        res.render('mascotas', {

            arrayMascotas: arrayMascotasDb
            
        });
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;