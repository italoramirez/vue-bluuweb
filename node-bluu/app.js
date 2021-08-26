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
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('index');
    res.render('index', {title: 'dinámico'});
})

app.get('/servicios', (req, res) => {
    // res.send('index');
    res.render('servicios', {title: 'servicios'});
})

app.use((req, res, next) => { 
    // res.status(404).sendFile(__dirname + '/public/404.html');
    res.status(404).render('404', { 
        titulo: '404', descricion: 'Descripción 404.'
    });
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`corriendo ${port}`)
})