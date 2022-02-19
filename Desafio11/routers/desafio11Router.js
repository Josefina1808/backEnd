const { fork } = require("child_process");

const server = require("express").Router();

server.get("/info", (req, res) => {
  const args =
    process.argv.length > 2 ? process.argv.slice(2).join(", ") : "ninguno";

  res.send(`
    <ul>
    <li>Sistema operativo: ${process.platform}</li>
    <li>Node version: ${process.version}</li>
    <li>Path de ejecución: ${process.execPath}</li>
    <li>Carpeta del proyecto: ${process.cwd()}</li>
  <li>Argumentos de entrada: ${args}</li>
  <li>ID: ${process.pid}</li>
  <li>Memoria total reservada: ${`${Math.round(
    process.memoryUsage().rss / 1024
  )} KB`}</li>
</ul>`);
});

//Randoms
server.get("/randoms", (req, res) => {
  const num = req.query.cant || 100;
  const randoms = fork('./utils/random.js', [num]);
  
  randoms.send("start");

  randoms.on("error", (err) => {
    console.log(`Error en child process 'random' ${err}`);
  });

  randoms.on("message", (obj) => {
    return res.json(obj);
  });
});



module.exports = server;
