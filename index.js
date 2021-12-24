const express = require("express");
const Contenedor = require("./class/contenedor");
const Cart = require("./class/carrito");
const handlebars = require("express-handlebars");
const { Router } = express;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));

const router = Router();
const productos = new Contenedor(__dirname + "/data/productos.json");
const carritos = new Cart(__dirname + "/data/carritos.json")

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

/* ROUTER BASE 'api/productos' */
app.use("/api/productos", router);

router.get("/", (req, res) => {
  let content = productos.content;
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", {
    list: content,
    showList: boolean,
  });
});

router.post("/", (req, res) => {
  productos.save(req.body);
  let content = productos.content;
  let boolean = content.length !== 0;
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});

router.put("/:id", (req, res) => {
  let obj = req.body;
  let id = Number(req.params.id);
  let content = productos.update(id, obj)
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  let content = productos.deleteById(id)
  return res.render("layouts/main.hbs", { list: content, showList: boolean });
});


/* ROUTER BASE 'api/carrito' */
const router2 = Router()
app.use("/api/carrito", router2);
router2.post("/", (req, res) => {
//Crea un carrito y devuelve su id.
})

router2.delete("/:id", (req, res) => {
// Vacía un carrito y lo elimina
})

router2.get("/:id/productos", (req, res) => {
//listar productos del carrito
})

router2.post("/:id/productos", (req, res) => {
//incorporar productos al carrito
})

router2.delete("/:id/productos/:id_prod", (req, res) => {
  //Eliminar un producto del carrito por su id de carrito y de producto
})

app.listen(8080);

