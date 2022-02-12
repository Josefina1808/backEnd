const fs = require('fs')
const Contenedor = require('../class/contenedor.js')
const { normalizeAndDenormalize } =  require('../utils/normalizr')

class ApiChat extends Contenedor {
    constructor() { super() }

    async writeChatToFile(){
        try{
            // Normalizamos para guardar la data de esa forma y ahorrar 
            const messagesNormalized = normalizeAndDenormalize("normalize", messages)
    
            await save(messagesNormalized)
    
        } catch (err) {
            console.log('no se pudo escribir el archivo ' + err)
        }
    }
    
    async readChatFromFile(){
        try{
            //Leemos la fuente que esta normalizada
            const message = await fs.promises.readFile('./data/mensajes.json')
            const messageList = JSON.parse(message)
    
            this.content.splice(0, this.content.length)
    
            //Denormalizamos la fuente
            const messagesDenormalized = normalizeAndDenormalize("denormalize", messageList)
            console.log(messagesDenormalized);
            //La pasamos a la variables message
            for (const m of messagesDenormalized) {
                
                this.content.push(m)
            }
    
        } catch (err) {
            console.log('no se pudo leer el archivo ' + err)
        }
    }
    
 }
 
 module.exports = ApiChat