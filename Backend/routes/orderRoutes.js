const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place order
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order placed successfully" });
});

module.exports = router;