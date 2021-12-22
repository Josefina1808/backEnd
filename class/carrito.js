const fs = require('fs')

class Carrito {
    constructor(name) {
        this.fileName = name
        this.countID = 0
        this.carts = []
        this.init()
    }
    init() {
        try {
			let data = await fs.promises.readFile(this.fileName);
			this.content = JSON.parse(data);
			for (const element of this.content) {
				if (element.id > this.countID) this.countID = element.id;
			}
		} catch (error) {
			console.log('Aún no hay archivo');
		}
    }

    async write() { //Método que escribe/sobreescribe: de este manera queda más limpio el código de los otros métodos
        await fs.promises.writeFile(this.fileName, JSON.stringify(this.content))
    }

    createCart(){
        this.countID++ //Aumento la propiedad que va guardando el ID más alto
        object["id"] = this.countID //Agrego la propiedad id al objeto pasado como parámetro
        this.content.push(object) //Agrego el objeto al contenido(array)
        this.write() //Agrego el objeto al archivo
        return `El id del carrito es ${this.countID}.` //Retorna el ID
    }
    
    addProduct(id){
        // Buscar index del carrito, 
        const index = this.content.findIndex( objT => objT.id == id);
    }

    getAll(id) {
        // Buscar index del carrito, 
        const index = this.content.findIndex( objT => objT.id == id);
        //Trae la propiedad prductos del carrito indicado
        let result = carts[index].products
        return result;
    }

    deleteProduct(idCart, idProduct){

    }

    deleteCart(id){

    }
}

module.exports = Carrito