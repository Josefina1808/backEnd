module.exports = class InfoController {
  getInfo = (req, res) => {
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
  };
};
