const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});

const Driver = mongoose.model("driver", driverSchema);
module.exports = Driver;
