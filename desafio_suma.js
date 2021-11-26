const express = require('express')

const app = express()
app.listen(8080)

app.use(express.json())
app.use(express.urlencoded({extended: true})) 

app.get('/api/sumar/:num1/:num2', (req, res) => {
    let result = parseInt(req.params.num1)+parseInt(req.params.num2)
    res.send(result.toString())
})

app.get('/api/sumar', (req, res) => {
    let result = parseInt(req.query.num1) + parseInt(req.query.num2)
    res.send(result.toString())
})

app.get('/api/sumar/:sum', (req, res) => {
    let numbers = req.params.sum.split('+')
    let result = Number(numbers[0])+Number(numbers[1])
    res.send(result.toString())
})