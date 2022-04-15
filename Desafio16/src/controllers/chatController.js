const  ChatService = require("../services/chatService");

module.exports = class ChatController {
  constructor() {
    this.chatService = new ChatService()
  }
  getChat = (req, res) => {
    if (req.session.user) {
      return res.render("chat.hbs");
    } else return res.redirect("login");
  };
};