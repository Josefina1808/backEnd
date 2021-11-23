const express = require("express");

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`servidor en ${PORT}`);
});

app.on("error", error => {
  console.log("Hubo un error");
});

app.get("/", (request, response) => {
  response.send("Hola a los estudiantes");
});

app.get("/hola", (request, response) => {
  response.send("HOLAA :-D");
});
