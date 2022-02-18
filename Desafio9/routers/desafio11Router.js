const { fork } = require("child_process");

const server = require("express").Router();

server.get("/info", (req, res) => {
  const args = process.argv;
  const ruta = process.cwd();
  const plataforma = process.platform;
  const id = process.pid;
  const version = process.version;
  const rss = process.memoryUsage();
  const fileName = process.writeReport(fileName);
  res.send(`
    <ul>
  <li>Argumentos de entrada: ${args}</li>
  <li>Path de ejecución: ${ruta}</li>
  <li>Sistema operativo: ${plataforma}</li>
  <li>ID: ${id}</li>
  <li>Node version: ${version}</li>
  <li>Carpeta del proyecto: ${fileName}</li>
  <li>Memoria total reservada: ${rss}</li>
</ul>`);
});

server.get("/randoms", (req, res) => {
  num = req.query.cant;
  const randoms = fork("./utils/random.js");
  randoms.send("start");
  randoms.on("message", (obj) => {
    res.send(obj);
  });
});

module.exports = server;
