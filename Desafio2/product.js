const Contenedor = require('./desafio.js')

const run = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: "Pulsera",
        price: 150,
        thumbnail: "shorturl.at/bqDZ3"
    })

    contenedor.save({
        title: "Collar",
        price: 100,
        thumbnail: "shorturl.at/hlEYZ"
    })

    contenedor.save({
        title: "iPhone",
        price: 1200,
        thumbnail: "shorturl.at/dpqH6"
    })
    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

run();