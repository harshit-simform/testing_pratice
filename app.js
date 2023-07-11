const express = require("express");
require("dotenv").config();
const app = express();

app.use("/user", require("./routes/userRoutes"));

module.exports = app;
