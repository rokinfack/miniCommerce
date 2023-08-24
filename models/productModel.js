const productSchema = new Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true, default:0},
    categories: { type: String, required: true},
    createdAt: { type: Date, default: Date.new()}
})