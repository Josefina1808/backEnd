import Joi from 'joi'

class News {
    constructor(title,body,author,image,email,view) {
        this.title = title
        this.body = body
        this.author = author
        this.image = image
        this.email = email
        this.view = view
    }

    equals(otherNews) {
        if(!otherNews instanceof News) {
            return false
        }
        if(this.title  != otherNews.title){
            return false
        }
        if(this.body  != otherNews.body){
            return false
        }
        if(this.author  != otherNews.author){
            return false
        }
        if(this.image  != otherNews.image){
            return false
        }
        if(this.email  != otherNews.email){
            return false
        }
        if(this.view  != otherNews.view){
            return false
        }
        return true
    }
    static validate(news,required) {
        const NewsSchema = Joi.object({
            title: required? Joi.string().required() : Joi.string(),
            body: required? Joi.string().required() : Joi.string(),
            author: required? Joi.string().required() : Joi.string(),
            image: required? Joi.string().required() : Joi.string(),
            email: required? Joi.string().required() : Joi.string(),
            view: required? Joi.boolean().required() : Joi.boolean(),
        })

        const {error} = NewsSchema.validate(news)
        if(e) {
            throw e
        }
    }
}
export default News