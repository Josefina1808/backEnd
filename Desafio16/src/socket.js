const app = require("express")();

const ChatService = require("./services/chatService");
const chatService = new ChatService();
let messages = [];

const socket = (io) => {
  io.on("connection", async (socket) => {
    let messagesToEmit = await chatService.getChat();

    messages.splice(0, messages.length);
    for (const m of messagesToEmit) {
      messages.push(m);
    }

    socket.emit("messages", messagesToEmit);

    socket.on("new-message", (data) => {
      data.id = messages.length + 1;
      messages.push(data);

      io.sockets.emit("messages", [data]);

      chatService.saveChat(messages);
    });
  });
};

module.exports = {socket}