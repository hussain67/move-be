const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(process.env.MONGO_URI_DEV);
}

const router = require("./routes/routes");

app.use("/api", router);

module.exports = app;
