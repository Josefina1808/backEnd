const server = require("express").Router();
const Cart = require("./class/carrito");
const carritos = new Cart(__dirname + "/data/carritos.json");

server.post("/", (req, res) => {
  //Crea un carrito y devuelve su id
  carritos.createCart(req.body);
  let content = carritos.carts;
  let boolean = content.length !== 0;
  return res.render("partials/cart.hbs", { list: content, showList: boolean });
});

server.delete("/:id", (req, res) => {
  // Vacía un carrito y lo elimina
  let id = Number(req.params.id);
  let content = carritos.deleteCart(id);
  return res.render("partials/cart.hbs", { list: content, showList: false });
});

server.get("/:id/productos", (req, res) => {
  //listar productos del carrito
  let id = Number(req.params.id);
  let content = carritos.getAll(id)
  let boolean = content.length !== 0;
  return res.render("partials/cart.hbs", { list: content, showList: boolean });
});

server.post("/:id/productos", (req, res) => {
  //incorporar productos al carrito
  let id = Number(req.params.id);
  let product = req.body
  let content = carritos.addProduct(id, product)
  let boolean = content.length !== 0;
  return res.render("partials/cart.hbs", { list: content, showList: boolean });
});

server.delete("/:id/productos/:id_prod", (req, res) => {
  //Eliminar un producto del carrito por su id de carrito y de producto
  let idCart = Number(req.params.id);
  let idProd = Number(req.params.id_prod);
  let content = carritos.deleteProduct(idCart, idProd)
  let boolean = content.length !== 0;
  return res.render("partials/cart.hbs", { list: content, showList: boolean });
});

module.exports = server;