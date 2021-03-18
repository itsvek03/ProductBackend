const CategoryController = require("../controller/CategoryController")
const app = require("express");
const catrouter = app.Router()


catrouter
    .route("/")
    .get(CategoryController.GetCategory)
    .post(CategoryController.createCategory)

catrouter
    .route("/:id")
    .get(CategoryController.GetCategoryById)
    .patch(CategoryController.UpdateCategory)
    .delete(CategoryController.deleteCategory)

module.exports = catrouter;

