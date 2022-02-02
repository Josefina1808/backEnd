const faker = require('faker') 
faker.locale = 'es'

function generarProducto() {
  return {
    nombre: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    thumbnail:faker.image.imageUrl(),
  }
}

module.exports = {generarProducto}