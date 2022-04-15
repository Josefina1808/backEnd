const router = require("express").Router();
const RandomController = require("../controllers/randomController");
const InfoController = require("../controllers/infoController");

module.exports = class Desafio11Router {
  constructor() {
    this.randomController = new RandomController();
    this.infoController = new InfoController();
  }
  start() {
    //Info
    router.get("/info", this.infoController.getInfo());

    //Randoms
    router.get("/randoms", this.randomController.getRandom());
  }
};
