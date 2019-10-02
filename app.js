const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/users", require("./routes/auth.js"));
app.use("/news", require("./routes/news"));
app.use("/category", require("./routes/category"));
app.use(require("./routes/accessRoutes"));
// Start the server
const port = process.env.PORT || 5000;
app.listen(port);
console.log("Server listening at " + port);
