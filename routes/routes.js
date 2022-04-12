const express = require("express");
const router = express.Router();

const { checking } = require("../controllers/divers.controller");

router.get("/", checking);

module.exports = router;
