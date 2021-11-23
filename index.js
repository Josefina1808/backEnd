const express = require("express");
const Contenedor = require("./contenedor");
const fs = require("fs");

const app = express();
const PORT = 8080;

const PRODUCTS = new Contenedor("productos.txt");
PRODUCTS.init();

app.listen(PORT);

app.on("error", (error) => {
  console.log("Hubo un error");
});

app.get("/", (request, response) => {
  response.send(`<h1 style='color:blue;'>Bienvenidos a Express</h1>`);
});

app.get("/productos", (request, response) => {
  response.send(PRODUCTS.getAll());
});

app.get("/productoRandom", (request, response) => {
  response.send(PRODUCTS.getById(Math.floor(Math.random() * (PRODUCTS.countID - 1 + 1) + 1)));
});
