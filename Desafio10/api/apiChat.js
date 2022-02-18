const fs = require("fs");
const { normalizeAndDenormalize } = require("../utils/normalizr");

class ApiChat {
  async writeChatToFile(message) {
    try {
      // Normalizamos para guardar la data de esa forma y ahorrar
      const messagesNormalized = normalizeAndDenormalize("normalize", message);

      await fs.promises.writeFile(
        "./data/chat.json",
        JSON.stringify(messagesNormalized)
      );
    } catch (err) {
      console.log("no se pudo escribir el archivo " + err);
    }
  }

  async readChatFromFile() {
    try {
      //Leemos la fuente que esta normalizada
      const message = await fs.promises.readFile("./data/chat.json");
      const messageList = JSON.parse(message);

      //Denormalizamos la fuente
      const messagesDenormalized = normalizeAndDenormalize("denormalize", messageList);
      
      return messagesDenormalized;
    } catch (err) {
      console.log("no se pudo leer el archivo " + err);
    }
  }
}

module.exports = ApiChat;
