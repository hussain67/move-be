const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use("/api", router);

module.exports = app;
