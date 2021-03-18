const app = require('./index')
require('./connection/connection')
const port = process.env.PORT || 8000;

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});


// Running on the port
app.listen(port, () => { console.log(`Port is running at ${port}`) })


process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});