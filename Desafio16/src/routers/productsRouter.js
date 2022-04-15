const router = require("express").Router();
const ProductsController = require("../controllers/productsController");

module.exports = class ProductsRouter {
  constructor() {
    this.productsController = new ProductsController();
  }
  start() {
    router.get("/", this.productsController.getProducts());

    router.post("/", this.productsController.postProducts());
  }
};
