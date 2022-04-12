const express = require("express");
const router = express.Router();

const { checking, createDriver } = require("../controllers/divers.controller");

router.get("/", checking);
router.post("/drivers", createDriver);

module.exports = router;
