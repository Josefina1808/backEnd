const express = require("express");

const app = express();

app.listen(8080);

app.use(express.json())
app.use(express.urlencoded({extended: true})) 