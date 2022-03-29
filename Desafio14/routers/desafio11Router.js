const router = require("express").Router();
const {getRandomController} = require('../controllers/randomController')
const {getInfoController} = require('../controllers/infoController')

//Info
router.get("/info", getInfoController);

//Randoms
router.get("/randoms", getRandomController);


module.exports = router;
