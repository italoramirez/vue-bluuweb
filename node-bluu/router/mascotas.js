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

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const mascotaDB = Mascota.findOne({ _id: id });
        res.render('detalle', { 
           mascota: mascotaDB,
           error: false    
        });
        console.log(mascotaDB);
    } catch (error) {
        console.log(error);
        res.render('detalle', { 
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
         });
    }
})

module.exports = router;