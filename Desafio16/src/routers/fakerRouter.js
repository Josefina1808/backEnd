const router = require("express").Router();
const FakerController = require('../controllers/fakerController')

module.exports = class FakerRouter {
    contrucutor(){
        this.fakerController = new FakerController()
    }
    start(){
        router.get("/productos-test", this.fakerController.getFaker());
    }
}