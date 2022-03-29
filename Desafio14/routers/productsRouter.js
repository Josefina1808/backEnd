const router = require("express").Router();
const {getProductsController, postProductsController} = require('../controllers/productsController')

router.get("/", getProductsController);

router.post("/", postProductsController);

module.exports = router;
