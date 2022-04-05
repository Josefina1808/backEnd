const router = require("express").Router();
const {getChatController,socket} = require('../controllers/chatController')

router.get("/", getChatController);

module.exports = router;
