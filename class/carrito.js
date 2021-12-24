const fs = require("fs");

class Cart {
  constructor(name) {
    this.fileName = name;
    this.countID = 0;
    this.carts = [];
    this.init();
  }

  init() {
    try {
      let data = await fs.promises.readFile(this.fileName);
      this.carts = JSON.parse(data);
      for (const element of this.carts) {
        if (element.id > this.countID) this.countID = element.id;
      }
    } catch (error) {
      console.log("Aún no hay archivo");
    }
  }

  async write() {
    await fs.promises.writeFile(this.fileName, JSON.stringify(this.carts));
  }

  createCart(object) {
    this.countID++; //Aumento la propiedad que va guardando el ID más alto
    object["id"] = this.countID; //Agrego la propiedad id al objeto pasado como parámetro
    this.carts.push(object); //Agrego el objeto al contenido
    this.write(); //Agrego el objeto al archivo
    return `El id del carrito es ${this.countID}.`; //Retorna el ID
  }

  addProduct(id, product) {
    // Buscar index del carrito,
    const index = this.carts.findIndex((objT) => objT.id == id);
    this.carts[index].products.push(product);
    this.write();
  }

  getAll(id) {
    // Buscar index del carrito,
    const index = this.carts.findIndex((objT) => objT.id == id);
    //Trae la propiedad prductos del carrito indicado
    let result = carts[index].products;
    return result;
  }

  deleteProduct(idCart, idProduct) {
    let result;
    if (this.carts !== []) {
      const index = this.carts.findIndex(objT => objT.id == idCart);
      this.carts[index].products.filter(x => x.id !== idProduct);
      this.write();
      result = `El producto fue eliminado`;
    } else {
      result = `No hay carritos`;
    }
    return result;
  }

  deleteCart(id) {
    let result;
    if (this.carts !== []) {
      let newcarts = this.carts.filter((x) => x.id !== id);
      this.carts = newcarts;
      this.write(); //SobreEscribo el archivo
      result = `El carrito fue eliminado`;
    } else {
      result = `No hay carritos`;
    }
    return result;
  }
}

module.exports = Cart;
