const router = require("express").Router();
const {getChatController} = require('../controllers/chatController')

router.get("/", getChatController);

module.exports = router;
