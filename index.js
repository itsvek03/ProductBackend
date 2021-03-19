const express = require("express")
const app = express();
let helmet = require("helmet");
let morgan = require("morgan");
const AppError = require('./utils/AppError')
const globalHandleError = require('./controller/ErrorController')
const catrouter = require("./routes/CategoryRoutes")
const pdrouter = require("./routes/ProductRoutes")
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors')
app.use(cors())
app.use(express.json())

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss())

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


