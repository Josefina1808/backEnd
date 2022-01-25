const express = require("express");
const { Router } = express;
const Contenedor = require("./class/contenedor");
const handlebars = require("express-handlebars");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));

const productos = new Contenedor("productos");
const messages = [];
const router = Router();

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

router.get("/", async (req, res) => {
  const result = await productos.getAll();
  return res.send(JSON.stringify(result));
  
});

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  return res.send(JSON.stringify(productos.getById(id)));
});

router.post("/", async (req, res) => {
  let obj = req.body;
  const result = await productos.save(obj);
  return res.send(JSON.stringify(result));
});

router.delete("/:id", async (req, res) => {
  let id = Number(req.params.id);
  const result = await productos.deleteById(id)
  return res.send(JSON.stringify(result));
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

app.use("/api/productos", router);

httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});
