const getLoginController = (req, res) => {
  return res.render("login.hbs");
};

const postLoginController = (req, res) => {
  let username = req.body.name;
  req.session.user = username;
  return res.redirect("productos");
};

const getLogoutController = (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.render("bye_banner.hbs");
    } else res.send({ status: "Logout ERROR", body: err });
  });
};

module.exports = {
    getLoginController, postLoginController, getLogoutController
}