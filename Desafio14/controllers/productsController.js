const {
  getProductsService,
  thereAreProductsService,
  saveProductService,
} = require("../services/productsService");

const getProductsController = (req, res) => {
  if (req.session.user) {
    return res.render("index.hbs", {
      list: getProductsService(),
      showList: thereAreProductsService(),
      name: req.session.user,
    });
  } else return res.redirect("login");
};

const postProductsController = (req, res) => {
  if (req.session.user) {
    saveProductService(req.body);
    return res.render("index.hbs", {
      list: getProductsService(),
      showList: thereAreProductsService(),
      name: req.session.user,
    });
  } else return res.redirect("login");
};

module.exports = {
  getProductsController, postProductsController
};
