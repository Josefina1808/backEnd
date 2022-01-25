const express = require("express");
const Contenedor = require("./class/contenedor");
const handlebars = require('express-handlebars');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

const productos = new Contenedor(__dirname + "/data/productos.json");

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        partialsDir: __dirname + "/views/partials"
    })
)

app.set('views', './views')
app.set('views engine', 'hbs')

app.get('/', (req, res) => {
    let content = productos.content
    return res.render('hbs/index.hbs', {content})
})

app.post("/productos", (req, res) => {
    productos.save(req.body)
    let content = productos.content
    let boolean = content.length !==0
    return res.render('hbs/productos.hbs', {list: content, showList: boolean});
});

app.get("/productos", (req, res) => {
    let content = productos.content
    let boolean = content.length !==0
    console.log(content);
    return res.render('hbs/productos.hbs', {
        list: content, showList: boolean});
});

app.listen(8080);