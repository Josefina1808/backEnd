const app = require("express")();

const ApiChat = require("./services/apiChat");
const apiChat = new ApiChat();
let messages = [];

const socket = (io) => {
  io.on("connection", async (socket) => {
    let messagesToEmit = await apiChat.readChatFromFile();

    messages.splice(0, messages.length);
    for (const m of messagesToEmit) {
      messages.push(m);
    }

    socket.emit("messages", messagesToEmit);

    socket.on("new-message", (data) => {
      data.id = messages.length + 1;
      messages.push(data);

      io.sockets.emit("messages", [data]);

      apiChat.writeChatToFile(messages);
    });
  });
};

module.exports = {socket}