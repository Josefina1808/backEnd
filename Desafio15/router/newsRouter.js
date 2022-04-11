const router = require('express').Router()
const NoticasController = require('../controller/newsController')

module.exports = class RouterNoticias {
    constructor(){
        this.controladorNoticias = new NoticasController()
    }

    start() {
        router.get('/:id', this.controladorNoticias.getNoticias())
        router.post('/:id', this.controladorNoticias.saveNoticias())
        router.put('/:id', this.controladorNoticias.updateNoticias())
        router.delete('/:id', this.controladorNoticias.deleteNoticias())

        return router
    }
}