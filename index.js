const express = require("express");
const products = require('./product.js')
const Contenedor = require('./contenedor')
const fs = require("fs");
const moment = require("moment");

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(products);
});

app.on("error", (error) => {
  console.log("Hubo un error");
});

app.get("/", (request, response) => {
  response.send(`<h1 style='color:blue;'>Bienvenidos a Express</h1>`);
});

app.get("/productos", (request, response) => {
  response.send(products.getAll())
  /* fs.readFileSync("productos.txt", 'utf-8') */
});

app.get("/productoRandom", (request, response) => {
  response.send(products.getById(Math.floor(Math.random() * (3 - 1 + 1) + 1)));
});