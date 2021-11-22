const express = require("express");
const fs = require("fs");
const moment = require("moment");

const app = express();
const PORT = 8080;
let visitas = 0;

try {
  let data = fs.writeFileSync("visitas");
  visitas = Number(data);
} catch (error) {
  console.log("No file");
}

app.listen(PORT, () => {
  try {
    let data = fs.writeFileSync("visitas");
    visitas = Number(data);
  } catch (error) {
    console.log("No file");
  }
});

app.on("error", (error) => {
  console.log("Hubo un error");
});

app.get("/", (request, response) => {
  response.send(`<h1 style='color:blue;'>Bienvenidos a Express</h1>`);
});

app.get("/visitas", (request, response) => {
  visitas++;
  fs.writeFileSync("visitas", visitas.toString())
  response.send(`Las visitas son ${visitas}`);
});

app.get("/fyh", (request, response) => {
  response.send({ fyh: moment().format("M/D/YYYY H:mm:ss") });
});