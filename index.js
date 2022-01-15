const express = require("express")
const mongoose = require('mongoose')
const { Schema } = mongoose;

const router = require("./routes/router")

const URL = "mongodb://tom:jerry@127.0.0.1/clase19"
const PORT = process.env.PORT || 3000

mongoose.connect(URL, () => console.log(`DB connected`))

const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Running on ${PORT}`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/book', routerBook)