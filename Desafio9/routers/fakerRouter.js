const server = require("express").Router();
const ApiProductos = require("../api/apiProductos.js");
const apiProductos = new ApiProductos();

server.get("/productos-test", (req, res) => {
    const result = apiProductos.productos();
    return res.render("index.hbs", {
      list: result,
      showList: true,
      name: req.session.user,
    });
});

module.exports = server;