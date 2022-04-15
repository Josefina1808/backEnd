const ProductsFakerService = require("../services/productsFakerService");

module.exports = class FakerController {
  constructor() {
    this.productsFaker = new ProductsFakerService()
  }
  getFaker = (req, res) => {
    return res.render("index.hbs", {
      list: this.productsFaker.productos(),
      showList: true,
      name: req.session.user,
    });
  };
};
