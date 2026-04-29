const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: Array,
  totalAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", OrderSchema);