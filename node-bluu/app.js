// const { frutas, dinero } = require('./frutas');
// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));
 
// frutas.forEach( frutas => console.count(frutas))
// console.log(dinero );

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end('Respondiendo a la solicitud web');
// });
// const puerto = 3000;
// server.listen(puerto, () => {
//     console.log('escuchando');
// })


const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
//Entorno e.nv
require('dotenv').config()

const app = express();

// parse application/x-www-form-urlencoded -> envìo de formulario através un formulario post 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json -> fetch através de json
app.use(bodyParser.json())
const port = process.env.PORT || 3000;




const uri = `mongodb+srv://${ process.env.USUARIO }:${ process.env.PASSWORD }@cluster0.ggmgg.mongodb.net/${ process.env.DBNAME }?retryWrites=true&w=majority`;

mongoose.connect(uri , {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then( () => console.log('DB conectada'))
    .catch( e => console.log(e));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))

//rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/mascotas'));

app.use((req, res, next) => { 
    // res.status(404).sendFile(__dirname + '/public/404.html');
    res.status(404).render('404', { 
        titulo: '404', descricion: 'Descripción 404.'
    });
})



app.listen(port, () => {
    console.log(`corriendo ${port}`)
})