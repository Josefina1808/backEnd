
const app = require('express')()
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const ApiChat = require("../services/apiChat");
const apiChat = new ApiChat();
let messages = [];

const socket = () => io.on("connection", async (socket) => {
  let messagesToEmit = await apiChat.readChatFromFile();

  messages.splice(0, messages.length);
  for (const m of messagesToEmit) {
    messages.push(m);
  }

  socket.emit("messages", messagesToEmit);

  socket.on("new-message", (data) => {
    data.id = messages.length+1
    messages.push(data);

    io.sockets.emit("messages", [data]);

    apiChat.writeChatToFile(messages);
  });
});

const getChatController = (req, res) => {
  if (req.session.user) {
    return res.render("chat.hbs");
  } else return res.redirect("login");
};

module.exports = {
    getChatController}
