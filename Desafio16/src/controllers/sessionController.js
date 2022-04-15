module.exports = class SessionController {
  getLogin = (req, res) => {
    return res.render("login.hbs");
  };

  postLogin = (req, res) => {
    let username = req.body.name;
    req.session.user = username;
    return res.redirect("productos");
  };

  getLogout = (req, res) => {
    req.session.destroy((err) => {
      if (!err) {
        res.render("bye_banner.hbs");
      } else res.send({ status: "Logout ERROR", body: err });
    });
  };
};
