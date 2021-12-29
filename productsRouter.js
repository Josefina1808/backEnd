const server = require("express").Router();
const Contenedor = require("./class/contenedor");
const productos = new Contenedor(__dirname + "/data/productos.json");

server.get("/", (req, res) => {
  let content = productos.content;
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", {
    list: content,
    showList: boolean,
  });
});

server.post("/", (req, res) => {
  productos.save(req.body);
  let content = productos.content;
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});

server.put("/:id", (req, res) => {
  let obj = req.body;
  let id = Number(req.params.id);
  let content = productos.update(id, obj);
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});

server.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  let content = productos.deleteById(id);
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});

module.exports = server;