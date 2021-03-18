const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')
const Helper = require("../utils/Helper")

exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    const docu = await Model.findByIdAndDelete(req.params.id);
    console.log(docu)
    if (!docu) {
        return next(new AppError("Invalid Id", 404))
    }
    res.status(200).json({
        message: "Deleted Successfully"
    })
})

exports.UpdateOne = Model => catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!data) {
        return next(new AppError("Invalid Id", 401))
    }
    res.status(200).json({
        message: "Updated Successfully",
        data
    })
})

exports.CreateOne = Model => catchAsync(async (req, res, next) => {
    const createCat = await Model.create(req.body);
    const data = await createCat.save();
    res.status(200).json({
        message: "Data Inserted Successfully",
        data
    })
})





exports.getOne = (Model, popOptions) => catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        doc
    });
});


exports.GetModel = (Model, popOptions) => catchAsync(async (req, res, next) => {
    let query = Model.find();
    if (popOptions) query = query.populate(popOptions)
    const features = new Helper(query, req.query).paginate();
    const doc = await features.query;
    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: doc.length,
        doc
    });
});