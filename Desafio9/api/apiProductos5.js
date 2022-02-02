const Contenedor = require('../class/contenedor.js')
const { generarProducto } =  require('../utils/generarProducto')

class ApiProductos extends Contenedor {
    constructor() { super() }
 
    productos(cant = 5) {
        
        for (let i = 0; i < cant; i++) {
            const nuevoProducto = generarProducto()
            const guardado = this.save(nuevoProducto)
            
        }
        return this.content
    }
 }
 
 module.exports = ApiProductos