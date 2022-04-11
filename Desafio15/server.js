const config = require('./config/config')
const express = require(('express'))
const cors = require('cors')
const RouterNoticias = require('./router/routernoticias.js')

const app = express()

if(confgi.NODE_ENV == 'development') app.use(cors())

app.use(express.static('public'))
app.use(express.json())

const routerNoticias = new RouterNoticias()

app.use('/noticias', routerNoticias.start())

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`SERVER ON ${PORT} (${confi.NODE_ENV} - ${config.PERS})`);
});
server.on('error', e => console.error('SERVER ERROR: ', e))