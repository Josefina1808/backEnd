import newsDTO from '../DTOs/newsDTO.js'
import NewsBaseDAO from './newsBaseDAO.js'

class NewsMemDAO extends NewsBaseDAO {
    constructor() {
        super()
        this.news = []
    }

    getNews = async _id => {
        try {
            if(_id) {
                let index = this.news.findIndex(n => n._id == _id)
                return index>=0? [ this.news[index] ] : []
            } else {
                return this.news
            }
        } catch (e) {
            console.log('error getNews at DAO:', e); 
            return []
        }
    }

    saveNews = async news => {
        try {
            let _id = this.getNext_Id(this.news)
            let date = new Date().toLocaleDateString()
            let savedNews = newsDTO(news,_id,date)
            this.news.push(savedNews)

            return savedNews
        } 
        catch (e) {
            console.log('error saveNews at DAO:', e); 
            return {}
        }
    }

    updateNews = async (_id, news) => {
        try {
            let date = new Date().toLocaleDateString()
            let newNews = newsDTO(news,_id,date)

            let index = this.getIndex(id, this.news)
            let nowNews = this.news[index] || {}

            let updatedNews = {...nowNews,...newNews}

            index>=0?
                this.news.splice(index,1,updatedNews) :
                this.news.push(updatedNews)
            
            return updatedNews
            
        } catch (e) {
            console.log('error updateNews at DAO:', e); 
            return {}
        }
    }

    deleteNews = async _id => {
        try {
            let index = this.getIndex(id, this.news)
            let deletedNews = this.news.splice(index,1)[0]

            return deletedNews
            
        } catch (e) {
            console.log('error deleteNews at DAO:', e); 
            return {}
        }
    }
}

export default NewsMemDAO 