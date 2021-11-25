const express = require('express')

const app = express()

app.listen(8080)

app.get('/', (req, res) => {
    res.send(`
        <a href="/api/ciudades">Saludo<a>
    `)
})

let ciudades = [
    {id: 1, nombre:'Bogotá', pais:'Colombia'},
    {id: 2, nombre:'San Juan', pais:'Argentina'},
    {id: 3, nombre:'Villa Mercedes', pais:'Argentina'},
    {id: 1, nombre:'Medellin', pais:'Uruguay'}
]

app.get('/api/ciudades', (req, res) => {
    console.log('GET recibido');
    if (Object.entries(req.query).length > 0){
        res.json({
            result: ciudades.filter(c => c.pais===req.query.pais),
            query: req.query
        })
    } else {
        res.json(ciudades)
    }
})
app.get('/api/ciudad/:id', (req, res) => {
    console.log('GET recibido');
    console.log(req.params.id);
    let id = req.params.id
    let ciudad = ciudades.find(c => c.id == id)
    
    res.json(ciudad)
})