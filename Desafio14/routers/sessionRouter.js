const server = require("express").Router();
const {getLoginController, postLoginController, getLogoutController} = require('../controllers/sessionController')

server.get("/login", getLoginController);
server.post("/login", postLoginController);
server.get("/logout", getLogoutController);

module.exports = server