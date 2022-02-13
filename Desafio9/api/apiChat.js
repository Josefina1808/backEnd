const fs = require('fs')
const Contenedor = require('../class/contenedor.js')
const { normalizeAndDenormalize } =  require('../utils/normalizr')

class ApiChat extends Contenedor {
    constructor() { super() }

   writeChatToFile(messages){
        try{
            // Normalizamos para guardar la data de esa forma y ahorrar 
            const messagesNormalized = normalizeAndDenormalize("normalize", messages)
    
            save(messagesNormalized)
    
        } catch (err) {
            console.log('no se pudo escribir el archivo ' + err)
        }
    }
    
    readChatFromFile(){
        try{
            //Leemos la fuente que esta normalizada
            const messages = this.getAll()
    
            //Denormalizamos la fuente
            const messagesDenormalized = normalizeAndDenormalize("denormalize", messages)
            console.log("Denormalized: "+ messagesDenormalized);
            
            return messagesDenormalized

        } catch (err) {
            console.log('no se pudo leer el archivo ' + err)
        }
    }
    
 }
 
 module.exports = ApiChat