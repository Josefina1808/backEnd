const router = require("express").Router();
const SessionController = require("../controllers/sessionController");

module.exports = class SessionRouter {
  constructor() {
    this.sessionController = new SessionController();
  }
  start() {
    router.get("/login", this.sessionController.getLogin);
    router.post("/login", this.sessionController.postLogin);
    router.get("/logout", this.sessionController.getLogout);
  }
};
