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
        const mascotaDB = await Mascota.findOne({ _id: id });
        console.log(mascotaDB);
        res.render('detalle', { 
           mascota: mascotaDB,
           error: false    
        });
    } catch (error) {
        console.log(error);
        res.render('detalle', { 
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        });
        console.log(mensaje)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
        if (mascotaDB) {
            res.json({
                estado: true, 
                mensaje: 'eliminado'
            })
        } else {
            res.json({
                estado: false, 
                mensaje: 'fallo eliminado'
            })
        }
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })

        console.log(mascotaDB);
        res.json({
            estado: true,
            mensaje: 'Éxitoso'
        })
        
    } catch (error) {
        res.json({
            estado: false,
            mensaje: 'Error'
        })
        console.log(error);
    }
})

module.exports = router;