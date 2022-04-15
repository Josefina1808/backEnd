const ProductsDAOMem = require("./productsDAOMem");
const ProductsDAOFile = require("./productsDAOFile");
const ProductsDAOMongo = require("./productsDAOMongo");
const { db } = require("../../../config/config");

module.exports = class PorductsFactoryDAO {
  static get(type) {
    switch (type) {
      case "MEM":
        return new ProductsDAOMem();
      case "FILE":
        return new ProductsDAOFile(process.cwd() + "data/productos.json");
      case "MONGO":
        return new ProductsDAOMongo(db.name, db.collection);
      default:
        return new ProductsDAOMem();
    }
  }
};
