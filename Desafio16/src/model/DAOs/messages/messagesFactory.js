const MessagesDAOMem = require("./messagesDAOMem");
const MessagesDAOFile = require("./messagesDAOFile");
const MessagesDAOMongo = require("./messagesDAOMongo");
const { db } = require("../../../config/config");

module.exports = class MessagesFactoryDAO {
  static get(type) {
    switch (type) {
      case "MEM":
        return new MessagesDAOMem();
      case "FILE":
        return new MessagesDAOFile(process.cwd() + "data/chat.json");
      case "MONGO":
        return new MessagesDAOMongo(db.name, "messages");
      default:
        return new MessagesDAOMem();
    }
  }
};
