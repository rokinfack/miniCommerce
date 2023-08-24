const { default: mongoose, Schema } = require("mongoose")

const ProductSchema = new Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true, default:0},
    categories: { type: String, required: true},
    createdAt: { type: Date, default: new Date()}
});

const Products = mongoose.model('product',ProductSchema)

module.exports = Products