const router = require('express').Router();
const { request } = require('express');
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schemaRegister = Joi.object({
    name    : Joi.string().min(6).max(255).required(),
    email   : Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});


const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if( !user ) {
        return res.status(400).json({ 
            error: true, 
            mensaje: 'Usuario no registrado'
        });
    }

    const passValido = await bcrypt.compare( req.body.password, user.password );
    if ( !passValido ) {
        return res.status(400).json({ 
            error: true,
            mensaje: 'Usuario o contraseña incorrecta'
        });
    }

    const token = jwt.sign({ 
        name: user.name,
        id: user._id,
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
    
    res.json({
        error: null,
        mensaje: 'Bienvenido',
        token
    })
 
})


router.post('/register', async (req, res) => {
    
    //validaciones de ususario
    const { error } = schemaRegister.validate(req.body);

    if ( error ) {
       return res.status(400).json({  error: error.details[0].message})
    }

    const existeEmail = await User.findOne({ email: req.body.email });

    if ( existeEmail ) {
        return res.status(400).json({ 
            error:true, 
            mensaje:'email ya registrado'
        })
    }

    const saltos  = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, saltos);



    const user = new User({
        name    : req.body.name,
        email   : req.body.email,
        password,
    });

    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })
    } catch (error) {
        
        res.status(400).json(error)
    }

})

module.exports = router;