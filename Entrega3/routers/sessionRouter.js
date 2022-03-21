const server = require("express").Router();
const {passportAuthLogin, passportAuthRegister} = require('../middlewares/passport')
const path = require('path')
const Contenedor = require("../class/contenedor");
//const routes = require('./routes')

const users = new Contenedor(path.join(__dirname, '../data/users.json'));

server.get("/login", /* routes.getLogin, */(req, res) => {
  return res.render("login.hbs");
});

server.post("/login", passportAuthLogin,/* routes.postLogin, */(req, res) => {
  let username = req.body.name;
  req.session.user = username;
  return res.redirect("productos");
});

server.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.render("bye_banner.hbs");
    } else res.send({ status: "Logout ERROR", body: err });
  });
});

server.get("/register", /* routes.getSignup, */(req, res) => {
  return res.render("register.hbs");
});

server.post("/register", passportAuthRegister, /* routes.postSignup, */ (req, res) => {
  users.save(req.body);
  let user = req.body.username;
  req.session.user = user;
  return res.redirect("login");
});

server.get('/login-error',(req, res) => {
  return res.render('error-login.hbs', {name: 'logearse', path: 'login'})
})
server.get('/register-error',/* routes.getFailSignup, */ (req, res) => {
  return res.render('error-register.hbs', {name: 'registrarse', path: 'register'})
})


module.exports = server