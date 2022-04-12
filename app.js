const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send({ check: "Api startted" });
});

module.exports = app;
