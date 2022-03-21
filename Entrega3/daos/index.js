let productosDao
let carritosDao

switch (process.env.PERS) {
    case 'json':
        const ProductosDaoArchivo  = require('./productos/ProductosDaoArchivo.js')
        const CarritosDaoArchivo = require('./carritos/CarritosDaoArchivo.js')

        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break
    default:
        const ProductosDaoMem  = require('./productos/ProductosDaoMem.js')
        const CarritosDaoMem = require('./carritos/CarritosDaoMem.js')

        productosDao = new ProductosDaoMem()
        carritosDao = new CarritosDaoMem()
        break
}

module.exports = productosDao;
module.exports = carritosDao;