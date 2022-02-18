const { normalize, denormalize, schema } = require('normalizr')

const normalizeAndDenormalize = (what, obj) => {
    const authorSchema = new schema.Entity("author", {}, {idAttribute: 'email'})
    const chatSchema = new schema.Entity("messages", {
        author: authorSchema,
    })

    if(what == "normalize") {
        return normalize(obj, [chatSchema])
    }else{
        return denormalize(obj.result, [chatSchema], obj.entities)
    }  
}

module.exports = {normalizeAndDenormalize}