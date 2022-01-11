const express = require("express");
const { Router } = express;
const Contenedor = require("./contenedor");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("./views"));

const productos = new Contenedor();
const router = Router();

app.listen(8080);

app.use("/api/productos", router);

router.get("/", (req, res) => {
    return res.send(productos.getAll());
  });
  
  router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    return res.send(productos.getById(id));
  });
  
  router.post("/", (req, res) => {
    let obj = req.body;
    return res.send(productos.save(obj));
  });
  
  router.delete("/:id", (req, res) => {
    let id = Number(req.params.id);
    return res.send(productos.deleteById(id));
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