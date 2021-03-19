// Creating the model
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: [true, "Product Name is required"],
        trim: true,
        minlength: [4, "4 characters is required"],
        maxlength: [20, "Less than 10 charcters is required"],
        unique: [true, "Already these name is present"],
        required: [true, "Product Name is required"]
    },
    Price: {
        type: Number,
        required: [true, "Price is required"]
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: [true, "Category is important"]
    }
})

const ProductModel = mongoose.model("products", ProductSchema)

module.exports = ProductModel;