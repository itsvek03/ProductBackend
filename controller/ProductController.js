const factory = require('../controller/HandleFactory')
const ProductModel = require('../model/ProductModel')

exports.CreateProduct = factory.CreateOne(ProductModel)
exports.GetProduct = factory.GetModel(ProductModel, { path: 'Category' })
exports.GetProductId = factory.getOne(ProductModel, { path: 'Category' })
exports.DeleteProduct = factory.deleteOne(ProductModel)
exports.UpdateProduct = factory.UpdateOne(ProductModel)