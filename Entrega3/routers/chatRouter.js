const server = require("express").Router();

server.get("/", (req, res) => {
  if (req.session.user) {
    return res.render("chat.hbs");
  } else return res.redirect("login");
});

module.exports = server;
