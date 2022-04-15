const path = require("path");
const PorductsFactoryDAO = require("../model/DAOs/products/productsFactory");

module.exports = class ProductsService {
  constructor() {
    this.productos = new PorductsFactoryDAO();
  }

  getProductsService = () => this.productos.getAll();

  getByIdProductService = (id) => {
    this.productos.getById(id);
  };

  thereAreProductsService = () => this.productos.content.length !== 0;

  saveProductService = (obj) => {
    this.productos.save(obj);
  };

  deleteByIdProductService = (id) => {
    this.productos.deleteById(id);
  };

  deleteAllProductService = () => this.productos.deleteAll();

  updateProductService = (id, obj) => {
    this.productos.update(id, obj);
  };
};
