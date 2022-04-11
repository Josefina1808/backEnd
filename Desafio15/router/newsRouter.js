import express from 'express'
const router = express.Router()
import NewsController from '../controller/newsController.js'

class RouterNews {
    constructor(){
        this.newsController = new NewsController()
    }

    start() {
        router.get('/:id', this.newsController.getNews())
        router.post('/', this.newsController.saveNews())
        router.put('/:id', this.newsController.updateNews())
        router.delete('/:id', this.newsController.deleteNews())

        return router
    }
}

export default RouterNews