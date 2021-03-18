const factory = require('../controller/HandleFactory')
const CategoryModel = require('../model/CategoryModel')


exports.deleteCategory = factory.deleteOne(CategoryModel)

exports.createCategory = factory.CreateOne(CategoryModel)

exports.UpdateCategory = factory.UpdateOne(CategoryModel);

exports.GetCategory = factory.GetModel(CategoryModel)

exports.GetCategoryById = factory.getOne(CategoryModel)


