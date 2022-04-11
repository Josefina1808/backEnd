const ApiNews = require('../api/apiNews.js')

module.exports = class NewsController {
    constructor() {
        this.apiNews = new ApiNews()
    }

    getNews = async (req, res) => {
        try {
            let id = req.params.id
            let News = await this.apiNews.getNews(id)

            res.send(News)

        } catch (e) {
            console.log('error getNews:', e);
        }
    }
    saveNews = async (req, res) => {
        try {
            let News = req.body
            let SavedNews = await this.apiNews.saveNews(News)

            res.json(SavedNews)

        } catch (e) {
            console.log('error saveNews:', e);
        }
    }
    updateNews = async (req, res) => {
        try {
            let News = req.body
            let id = req.params.id
            let updatedNews = await this.apiNews.updateNews(id, News)

            res.json(updatedNews)

        } catch (e) {
            console.log('error updateNews:', e);
        }
    }
    deleteNews = async (req, res) => {
        try {
            let id = req.params.id
            let deletedNews = await this.apiNews.deleteNews(id)

            res.json(deletedNews)

        } catch (e) {
            console.log('error deleteNews:', e);
        }
    }
}