const ChatController = require('../controllers/chatController')
module.exports = class ChatRouter {
    constructor() {
        this.chatController = new ChatController()
    }
    start() {
        router.get('/', this.chatController.getChat())
    }
}
