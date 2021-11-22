const http = require('http');
const moment = require("moment");

const server = http.createServer((request, response) => {
  //cada vez que se hace un request se ejecuta
  const now = new moment();
  console.log(`Someone request page. At ${now.format("h:mm:ss a")}`);
  response.end("<h1>Argentina clasifico a Qatar!!</h1>");
});

const connect = server.listen(3000, () => {
  let port = connect.address().port;
  console.log(`Escuchando por puerto ${port}`);
});
