const express = require("express");
const Contenedor = require("./class/contenedor");
const { Router } = express;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const router = Router();
const productos = new Contenedor(__dirname + "/data/productos.json");

app.use("/api/productos", router);
app.use(express.static("./views"));
app.listen(8080);

router.get("/", (req, res) => {
    return res.json(productos.content);
  });
  
  router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    return res.json(productos.getById(id));
  });
  
  router.post("/", (req, res) => {
    let obj = req.body;
    return res.json(productos.save(obj));
  });
  
  router.put("/:id", (req, res) => {
    let obj = req.body;
    let id = Number(req.params.id);
    return res.json(productos.update(id, obj));
  });
  
  router.delete("/:id", (req, res) => {
    let id = Number(req.params.id);
    return res.json(productos.deleteById(id));
  });