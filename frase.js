const express = require('express')

const app = express()

app.listen(8080)

const frase = "Mientras más grande mejor";
app.get('/', (req, res) => {
    res.send(`
        <a href="/api/frase">Saludo<a>
    `)
})

app.get('/api/frase', (req, res) => {
    res.json({frase})
})

app.get('/api/letras/:num', (req, res) => { //Devuelve la letra en la posición indicada a través del param
    let num = parseInt(req.params.num);

    if(isNaN(num)) {
        res.send({Error: "El parámetro no es número"})
    }

    if(num > frase.length || num<= 0){
        res.send({Error: "Fuera de rango"})
    }

    res.json({letra: frase[num - 1]})
})

app.get('/api/palabras/:num', (req, res) => { //Devuelve la palabra del número indicado. Ej: if 3 => grande
    let palabras = frase.split(' ')
    let num = parseInt(req.params.num);
    
    if(isNaN(num)) {
        res.send({Error: "El parámetro no es número"})
    }

    if(num > palabras.length || num<= 0){
        res.send({Error: "Fuera de rango"})
    }

    res.json({letra: palabras[num-1]})
})
