const Contenedor = require('./contenedor.js')
let products = new Contenedor('productos.txt')
const run = async function () {
    products.save({
        title: "Pulsera",
        price: 150,
        thumbnail: "shorturl.at/bqDZ3"
    })

    products.save({
        title: "Collar",
        price: 100,
        thumbnail: "shorturl.at/hlEYZ"
    })

    products.save({
        title: "iPhone",
        price: 1200,
        thumbnail: "shorturl.at/dpqH6"
    })
};

exports = products;