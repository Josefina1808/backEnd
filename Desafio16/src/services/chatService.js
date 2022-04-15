const MessagesFactoryDAO = require('../model/DAOs/messages/messagesFactory')

module.exports = class ChatService {
  constructor() {
    this.messages = new MessagesFactoryDAO();
  }
  async saveChat(message) {
    try {
      this.saveChat(message)
    } catch (err) {
      console.log("error saveChat at SERVICE " + err);
    }
  }

  async getChat() {
    try {
      this.getChat()
    } catch (err) {
      console.log("error getChat at SERVICE " + err);
    }
  }
}