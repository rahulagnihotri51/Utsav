const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    comment: String

}, { timestamps: true });

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = reviewModel;