const express = require("express");
const session = require("express-session");
const { Router } = express;
const expbs = require("express-handlebars");
const path = require('path')

/*      PERSISTENCIA POR MONGO ATLAS     */
const MongoStore = require("connect-mongo");
const adavancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
/* ------------------------------------- */

/* --- PERSISTENCIA POR FILE STORE --- */
/* const FileStore = require("session-file-store")(session); */
/* ----------------------------------- */

const Contenedor = require("./class/contenedor");
const ApiProductos = require("./api/apiProductos.js");
/* const productsRouter = require('./routers/productsRouter') */

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
app.use(
  session({
    /* store: MongoStore.create({
      mongoUrl: process.env.MONGOATLAS,
      mongoOptions: adavancedOptions,
    }), */
    store: new FileStore({ path: "./sessions" }),
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
  })
);
const apiProductos = new ApiProductos();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views/layouts"));

const productos = new Contenedor(__dirname + "/data/productos.json");
const messages = new Contenedor(__dirname + "/data/chat.json");

app.engine(
  "hbs",
  expbs.engine({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, "views/partials"),
    extname: ".hbs",
  })
);
app.set("views", "./views");
app.set("views engine", "hbs");

//ROUTER
//const router = Router();
//router.use("api/productos", productsRouter)

/* ROUTES */

app.get("/api/productos", (req, res) => {
  if (req.session.user) {
    let content = productos.content;
    let boolean = content.length !== 0;
    return res.render("index.hbs", {
      list: content,
      showList: boolean,
      name: req.session.user,
    });
  } else return res.redirect("api/login");
});

app.post("/api/productos", (req, res) => {
  if (req.session.user) {
    productos.save(req.body);
    let content = productos.content;
    let boolean = content.length !== 0;
    return res.render("index.hbs", {
      list: content,
      showList: boolean,
      name: req.session.user,
    });
  } else return res.redirect("api/login");
});

app.get("/api/chat", (req, res) => {
  if (req.session.user) {
    let content = productos.content;
    let boolean = content.length !== 0;
    return res.render("chat.hbs", {
      list: content,
      showList: boolean,
      name: req.session.user,
    });
  } else return res.redirect("apilogin");
});

app.get("/api/productos-test", (req, res) => {
  const result = apiProductos.productos();
  return res.render("index.hbs", {
    list: result,
    showList: true,
    name: req.session.user,
  });
  /* return res.send(JSON.stringify(result)) */
});

/* SESSIONS */
app.get("api/login", (req, res) => {
  return res.render("login.hbs");
});
app.post("api/login", (req, res) => {
  let username = req.body.name;
  req.session.user = username;
  return res.redirect("/api/productos");
});

app.get("api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.render("bye_banner.hbs");
    } else res.send({ status: "Logout ERROR", body: err });
  });
});

/* CHAT */
io.on("connection", (socket) => {
  socket.emit("messages", messages.content);

  socket.on("new-message", (data) => {
    data.time = new Date().toLocaleString();
    messages.save(data);
    io.sockets.emit("messages", [data]);
  });
});

//Manejador de errores
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Ocurrio un error: " + err);
});

httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});
