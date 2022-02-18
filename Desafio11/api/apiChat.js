const fs = require('fs')
const Contenedor = require('../class/contenedor.js')
const { normalizeAndDenormalize } =  require('../utils/normalizr')

const messages = new Contenedor(path.join(__dirname, "../data/chat.json"));
class ApiChat extends Contenedor {
    constructor() { super() }

    async writeChatToFile(){
        try{
            // Normalizamos para guardar la data 
            const messagesNormalized = normalizeAndDenormalize("normalize", messages.content)
            //Guardamos en archivo
            await save('NORMALIZED: '+messagesNormalized)
    
        } catch (err) {
            console.log('no se pudo escribir el archivo ' + err)
        }
    }
    
    async readChatFromFile(){
        try{
    
            //Denormalizamos la fuente
            const messagesDenormalized = normalizeAndDenormalize("denormalize", messages.getAll())
            console.log('DENORMALIZED: '+messagesDenormalized);

            return messagesDenormalized

        } catch (err) {
            console.log('no se pudo leer el archivo ' + err)
        }
    }
    
 }
 
 module.exports = ApiChat