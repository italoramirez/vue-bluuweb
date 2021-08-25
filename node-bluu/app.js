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

const port = 3000;

app.get('/', (req, res) => {
    res.send('index');
})

app.listen(port, () => {
    console.log(`corriendo ${port}`)
})