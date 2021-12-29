const express = require("express");
const { Router } = express;

const Contenedor = require("./contenedor");

const app = express();
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