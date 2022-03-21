const ContenedorArchivo = require("../../class/ContenedorArchivo.js")

class ProductosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('productos.json')
    }
}

module.exports = ProductosDaoArchivo
