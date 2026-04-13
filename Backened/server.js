const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for the frontend to communicate with the backend

// Import Models
const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const Order = require("./models/order");
const Review = require("./models/review");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/utsavStore")
    .then(() => {
        console.log("✅ Successfully connected to MongoDB Database (utsavStore)");
    })
    .catch((error) => {
        console.error("❌ Error connecting to MongoDB:", error.message);
    });

// API Routes
app.get("/api/products", async (req, res) => {
    try {
        // Fetch products from the database using our Product model
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

app.post("/api/products", async (req, res) => {
    try {
        // Add a new product to the database
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
});

// Basic route to check if server is running
app.get("/", (req, res) => {
    res.send("Utsav E-commerce Backend is running!");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
