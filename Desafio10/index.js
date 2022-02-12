const express = require("express");
const { Router } = express;
const handlebars = require("express-handlebars");
const fs = require("fs");

const Contenedor = require("./class/contenedor");
const ApiProductos = require("./api/apiProductos.js");
const ApiChat = require("./api/apiChat");
/* const productsRouter = require('./routers/productsRouter') */

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const apiProductos = new ApiProductos();
const apiChat = new ApiChat();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));

const productos = new Contenedor(__dirname + "/data/productos.json");
const messages = [];

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

//ROUTER
//const router = Router();
//router.use("api/productos", productsRouter)

app.get("/", (req, res) => {
  let content = productos.content;
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", {
    list: content,
    showList: boolean,
  });
});

app.post("/", (req, res) => {
  productos.save(req.body);
  let content = productos.content;
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});

app.get("/api/productos-test", (req, res) => {
  const result = apiProductos.productos();
  return res.render("layouts/main.hbs", {
    list: result,
    showList: true,
  });
  /* return res.send(JSON.stringify(result)) */
});

httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});

/* CHAT */
io.on("connection", (socket) => {
  socket.emit("messages", messages);

  socket.on("new-message", (data) => {
    data.time = new Date().toLocaleString();
    messages.push(data);
    io.sockets.emit("messages", [data]);
  });
});

//Manejador de errores
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Ocurrio un error: " + err);
});
