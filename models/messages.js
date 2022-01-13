const UserSchema = new mongoose.Schema({
    user: String,
    message: {type: String, require: true, max: 100},
})

const Messages = mongoose.model('Messages', UserSchema)
module.exports = Messages