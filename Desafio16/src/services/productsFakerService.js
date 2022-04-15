const ProductsDAOMem = require("../model/DAOs/products/productsDAOMem");
const { generarProducto } = require("../utils/generarProducto");

class ProductsFakerService extends ProductsDAOMem {
  constructor() {
    super();
  }

  productos(cant = 5) {
    const nuevos = [];
    for (let i = 0; i < cant; i++) {
      const nuevoProducto = generarProducto();
      const guardado = this.save(nuevoProducto);
      nuevos.push(guardado);
    }
    return nuevos;
  }
}

module.exports = ProductsFakerService;
