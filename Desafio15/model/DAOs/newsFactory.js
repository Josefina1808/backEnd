const NewsMemDAO = require('./newsMem')
const NewsFileDAO = require('./newsFile')
const NewsDBMongoDAO = require('./newsDBMongo')

module.exports = class NewsFactoryDAO {
    static get(type) {
        switch(type) {
            case 'MEM': return new NewsMemDAO()
            case 'FILE': return new NewsFileDAO(process.cwd() + '/noticias.json')
            case 'MONGO': return new NewsDBMongoDAO('ecommerce', 'news')
            default: return new NewsMemDAO()
        }
    }
}