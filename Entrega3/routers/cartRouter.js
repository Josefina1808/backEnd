const server = require("express").Router();
const productosDao = require('../daos/index')
const carritosDao = require('../daos/index')

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

server.get('/', async (req, res) => {
    res.json((await carritosDao.listarAll()).map(c => c.id))
})

server.post('/', async (req, res) => {
    res.json(await carritosDao.guardar())
})

server.delete('/:id', async (req, res) => {
    res.json(await carritosDao.borrar(req.params.id))
})

//--------------------------------------------------
// router de productos en carrito

server.get('/:id/productos', async (req, res) => {
    const carrito = await carritosDao.listar(req.params.id)
    res.json(carrito.productos)
})

server.post('/:id/productos', async (req, res) => {
    const carrito = await carritosDao.listar(req.params.id)
    const producto = await productosDao.listar(req.body.id)
    carrito.productos.push(producto)
    await carritosDao.actualizar(carrito)
    res.end()
})

server.delete('/:id/productos/:idProd', async (req, res) => {
    const carrito = await carritosDao.listar(req.params.id)
    const index = carrito.productos.findIndex(p => p.id == req.params.idProd)
    if (index != -1) {
        carrito.productos.splice(index, 1)
        await carritosDao.actualizar(carrito)
    }
    res.end()
})

module.exports = server;