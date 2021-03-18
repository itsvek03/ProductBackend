const express = require("express")
const app = express();
let helmet = require("helmet");
let morgan = require("morgan");
const AppError = require('./utils/AppError')
const globalHandleError = require('./controller/ErrorController')
const catrouter = require("./routes/CategoryRoutes")
const pdrouter = require("./routes/ProductRoutes")

app.use(express.json())

// Utilizing the app
if (app.get("env") === "development") {
    app.use(morgan("tiny"));
}
app.use(helmet());

app.use("/api/v1/cat", catrouter)
app.use("/api/v1/product", pdrouter)


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on these server`, 404))
})
app.use(globalHandleError);

module.exports = app


