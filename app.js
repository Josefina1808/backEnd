const express = require('express')

const app = express()

app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.send(`
        <a href="/saludo">Saludo<a>
    `)
})
app.get('/saludo', (req, res) => {
    res.send(`
        <h1>Hola Josefina!<h1>
    `)
})