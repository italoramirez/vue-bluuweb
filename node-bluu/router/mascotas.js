const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');
const { route } = require('./RutasWeb');

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

router.get('/crear', (req, res) => {
    res.render('crear'); 
})

router.post('/', async (req, res) => {
    const body = req.body;
    // console.log(body);
    try {
        // const mascotaDB = new Mascota(body);
        // await mascotaDB.save(); -> opción 1
        await Mascota.create(body); //opción 2
        res.redirect('/mascotas'); 
        console.log()
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;