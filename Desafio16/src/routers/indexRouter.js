const { Router } = require("express");
const router = Router();

const ProductsRouter = require("./productsRouter");
const ChatRouter = require("./chatRouter"); //lo manejo desde app.js porque me da error
const FakerRouter = require("./fakerRouter");
const SessionRouter = require("./sessionRouter");
const Desafio11Router = require("./desafio11Router");

module.exports = class Router {
  constructor() {
    this.productsRouter = new ProductsRouter();
    this.chatRouter = new ChatRouter();
    this.fakerRouter = new FakerRouter();
    this.sessionRouter = new SessionRouter();
    this.desafio11Router = new Desafio11Router();
  }
  start() {
    router.use("/productos", this.productsRouter.start());
    router.use("/chat", this.chatRouter.start());
    router.use("/", this.fakerRouter.start());
    router.use("/", this.sessionRouter.start());
    router.use("/", this.desafio11Router.start());
  }
};