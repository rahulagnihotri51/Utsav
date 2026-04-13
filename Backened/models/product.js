const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },

    price: { type: Number, required: true },

    category: String,
    festival: String,
    brand: String,

    stock: Number,

    rating: { type: Number, min: 1, max: 5 },

    thumbnail: String,

    tags: [String],

    isTrending: Boolean,
    discount: Number

}, { timestamps: true });
productSchema.index({ price: 1 });
productSchema.index({ category: 1 });

const productsModel = mongoose.model("Product", productSchema);

module.exports = productsModel;