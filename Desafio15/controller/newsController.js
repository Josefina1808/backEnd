import ApiNews from '../api/apiNews.js'

class NewsController {
    constructor() {
        this.apiNews = new ApiNews()
    }

    getNews = async (req, res) => {
        try {
            let id = req.params.id
            let news = await this.apiNews.getNews(id)

            res.send(news)

        } catch (e) {
            console.log('error getNews at controller:', e);
        }
    }
    saveNews = async (req, res) => {
        try {
            let News = req.body
            let SavedNews = await this.apiNews.saveNews(News)

            res.json(SavedNews)

        } catch (e) {
            console.log('error saveNews at controller:', e);
        }
    }
    updateNews = async (req, res) => {
        try {
            let News = req.body
            let id = req.params.id
            let updatedNews = await this.apiNews.updateNews(id, News)

            res.json(updatedNews)

        } catch (e) {
            console.log('error updateNews at controller:', e);
        }
    }
    deleteNews = async (req, res) => {
        try {
            let id = req.params.id
            let deletedNews = await this.apiNews.deleteNews(id)

            res.json(deletedNews)

        } catch (e) {
            console.log('error deleteNews at controller:', e);
        }
    }
}
export default NewsController