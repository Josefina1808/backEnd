const express = require("express");
const handlebars = require("express-handlebars");

const Contenedor = require("./class/contenedor");
const Cart = require("./class/carrito");
const productos = new Contenedor(__dirname + "/data/productos.json");
const carritos = new Cart(__dirname + "/data/carritos.json");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));

//ROUTER
const { Router } = express;
const router = Router();
const cartRouter = require('./carRouter,js')
const productsRouter = require('./productsRouter,js')

router.use("/api/carrito", cartRouter)
router.use("/api/productos", productsRouter)

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

app.listen(8080);