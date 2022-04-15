const express = require("express");
const expbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const config = require('./config/config')
const {options} = require('./config/session')
const { Server: HttpServer } = require("http");

const app = express();
const httpServer = new HttpServer(app);

//Session config
app.use(session(options));

/* Websocket config */
const {socket} = require('./socket')
const { Server: IOServer } = require("socket.io");
const io = new IOServer(httpServer);
socket(io)

/* MIDDLEWARS */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));
//Router
const Router = require("./routers/indexRouter");
const router = new Router()
app.use("/", router.start());

/* MOTOR PLANTILLA - HBS */
app.engine(
  "hbs",
  expbs.engine({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views/partials"),
    extname: ".hbs",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

//Manejador de errores
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Ocurrio un error: " + err);
});

//Server
const server = httpServer.listen(config.PORT, () => {
  console.log(`SERVER ON ${config.PORT} (${config.NODE_ENV} - ${config.PERS})`);
});
server.on('error', e => console.error('SERVER ERROR: ', e))