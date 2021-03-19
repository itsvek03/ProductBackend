// Creating the model for Category
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: [true, "Category Name is required"],
        trim: true,
        minlength: [4, "4 characters is required"],
        maxlength: [15, "Less than 10 charcters is required"],
        unique: [true, "Already these name is present"]
    }
})

const CategoryModel = mongoose.model("categories", CategorySchema)

module.exports = CategoryModel;