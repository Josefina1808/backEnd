const Contenedor = require('../class/contenedorMemoria.js')
const { generarProducto } =  require('../utils/generarProducto')

class ApiProductos extends Contenedor {
    constructor() { super() }
 
    productos(cant = 5) {
        const nuevos = []
        for (let i = 0; i < cant; i++) {
            const nuevoProducto = generarProducto()
            const guardado = this.guardar(nuevoProducto)
            nuevos.push(guardado)
        }
        return nuevos
    }
 }
 
 module.exports = ApiProductos