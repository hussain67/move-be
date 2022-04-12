const Driver = require("../models/driver.model");
exports.checking = (req, res) => {
  res.send({ check: "Api startted" });
};

exports.createDriver = (req, res) => {
  console.log(req.body);
  const driverProps = req.body;
  Driver.create(driverProps).then(driver => {
    res.send(driver);
  });
};
