const express = require("express");
const router = express.Router();

const { checking, createDriver, editDriver, deleteDriver } = require("../controllers/divers.controller");

router.get("/", checking);
router.post("/drivers", createDriver);
router.put("/drivers/:id", editDriver);
router.delete("/drivers/:id", deleteDriver);

module.exports = router;
