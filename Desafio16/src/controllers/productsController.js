const ProductsService = require("../services/productsService");

module.exports = class ProductsController {
  constructor() {
    this.products = new ProductsService();
  }

  getProducts = (req, res) => {
    if (req.session.user) {
      return res.render("index.hbs", {
        list: this.products.getProductsService(),
        showList: this.products.thereAreProductsService(),
        name: req.session.user,
      });
    } else return res.redirect("login");
  };

  postProducts = (req, res) => {
    if (req.session.user) {
      saveProductService(req.body);
      return res.render("index.hbs", {
        list: this.products.getProductsService(),
        showList: this.products.thereAreProductsService(),
        name: req.session.user,
      });
    } else return res.redirect("login");
  };
};
