const ProductController = require("../controller/ProductController")
const app = require("express");
const pdrouter = app.Router()


pdrouter
    .route("/")
    .get(ProductController.GetProduct)
    .post(ProductController.CreateProduct)

pdrouter
    .route("/:id")
    .get(ProductController.GetProductId)
    .patch(ProductController.UpdateProduct)
    .delete(ProductController.DeleteProduct)

module.exports = pdrouter;