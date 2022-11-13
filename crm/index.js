const express = require("express");
const app = express();
const mongoose = require("mongoose");
const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/db.config");

/**
 * Starting point of the application
 */
app.use(express.json);

/**
 * Start the server
 */
app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port number ${serverConfig.PORT}`);
})

/**
 * Connect to the MongoDB
 * 
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on('error', () => {
    console.log("Error while connecting to the DB");
});
db.once("open", () => {
    console.log("Connected to the MongoDB");
})

/**
 * Connect the route
 */
 require("./routes/auth.routes")(app);