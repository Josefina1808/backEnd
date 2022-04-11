import config from './config/config.js'
import express from 'express'
import cors from 'cors'
import RouterNews from './router/newsRouter.js'

const app = express()

if(config.NODE_ENV == 'development') app.use(cors())

app.use(express.static('public'))
app.use(express.json())

const routerNews = new RouterNews()

app.use('/noticias', routerNews.start())

const PORT = config.PORT

const server = app.listen(PORT, () => {
    console.log(`SERVER ON ${PORT} (${config.NODE_ENV} - ${config.PERS})`);
});
server.on('error', e => console.error('SERVER ERROR: ', e))
