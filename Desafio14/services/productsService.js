const path = require("path");
const Contenedor = require("../dao/contenedor");

const productos = new Contenedor(
  path.join(__dirname, "../data/productos.json")
);

const getProductsService = () => productos.getAll();

const getByIdProductService = (id) => {
  productos.getById(id);
};

const thereAreProductsService = () => productos.content.length !== 0;

const saveProductService = (obj) => {
  productos.save(obj);
};


const deleteByIdProductService = (id) => {
  productos.deleteById(id);
};

const deleteAllProductService = () => productos.deleteAll();

const updateProductService = (id, obj) => {
  productos.update(id, obj);
};



module.exports = {
  getProductsService,
  getByIdProductService,
  saveProductService,
  deleteAllProductService,
  deleteByIdProductService,
  updateProductService,
  thereAreProductsService
};
