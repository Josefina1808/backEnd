const express = require('express')

const app = express()
app.listen(8080)

app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const frase = 'Frase incial'

app.get('/api/frase', (req, res) => {
    res.send({frase})
})

app.get('/api/palabras/:pos', (req, res) => {
    let palabras = frase.split(' ');
    let  wordPosition = parseInt(req.params.pos);

    res.send({buscada: palabras[pos-1]})
})