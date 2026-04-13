const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("mongodb://127.0.0.1:27017/utsavStore")
    .then(async () => {
        console.log("Connected for seeding...");

        // Clear existing products
        await Product.deleteMany({});

        const products = [
            { name: "Diya Set", price: 199, category: "Diwali Decor", thumbnail: "🪔", stock: 100 },
            { name: "Rangoli Colors", price: 149, category: "Festival Decoration", thumbnail: "🌸", stock: 100 },
            { name: "Rakhi Gift Box", price: 299, category: "Raksha Bandhan", thumbnail: "🎀", stock: 50 },
            { name: "Puja Thali", price: 249, category: "Puja Essentials", thumbnail: "🪷", stock: 75 },
            { name: "Fairy Lights", price: 179, category: "Home Decoration", thumbnail: "✨", stock: 200 },
            { name: "Sweet Box", price: 399, category: "Gift Item", thumbnail: "🍬", stock: 150 },
            { name: "Festival Toran", price: 129, category: "Entrance Decor", thumbnail: "🌼", stock: 80 },
            { name: "Gift Hamper", price: 599, category: "Festive Combo", thumbnail: "🎁", stock: 30 }
        ];

        await Product.insertMany(products);
        console.log("Products seeded successfully!");
        process.exit();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
