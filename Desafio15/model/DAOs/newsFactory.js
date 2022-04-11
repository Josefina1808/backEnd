import NewsMemDAO from './newsMem.js'
import NewsFileDAO from './newsFile.js'
import NewsDBMongoDAO from './newsDBMongo.js'
import config from '../../config/config.js'

class NewsFactoryDAO {
    static get(type) {
        switch(type) {
            case 'MEM': return new NewsMemDAO()
            case 'FILE': return new NewsFileDAO(process.cwd() + '/noticias.json')
            case 'MONGO': return new NewsDBMongoDAO(config.db.name, config.db.collection)
            default: return new NewsMemDAO()
        }
    }
}
export default NewsFactoryDAO