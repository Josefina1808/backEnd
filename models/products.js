const UserSchema = new mongoose.Schema({
    title: {type: String, require: true, max: 100},
    price: Number,
    thumbnail: {type: String, require: true}
})

const Products = mongoose.model('Products', UserSchema)
module.exports = Products