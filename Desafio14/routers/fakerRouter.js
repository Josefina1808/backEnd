const server = require("express").Router();
const {getFakerController} = require('../controllers/fakerController')

server.get("/productos-test", getFakerController);

module.exports = server;