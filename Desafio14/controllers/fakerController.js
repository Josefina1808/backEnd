const ApiProductos = require("../services/apiProductos.js");
const apiProductos = new ApiProductos();

const getFakerController = (req, res) => {
    const result = apiProductos.productos();
    return res.render("index.hbs", {
      list: result,
      showList: true,
      name: req.session.user,
    });
}

module.exports = {getFakerController}