const Driver = require("../models/driver.model");
exports.checking = (req, res) => {
  res.send({ check: "Api startted" });
};

exports.createDriver = (req, res, next) => {
  //console.log(req.body);
  const driverProps = req.body;
  Driver.create(driverProps)
    .then(driver => {
      res.send(driver);
    })
    .catch(next);
};

exports.editDriver = (req, res, next) => {
  const driverId = req.params.id;
  const driverProps = req.body;
  Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
    .then(() => {
      return Driver.findById({ _id: driverId });
    })
    .then(driver => {
      res.send(driver);
    })
    .catch(next);
};

exports.deleteDriver = (req, res, next) => {
  const driverId = req.params.id;
  Driver.findByIdAndDelete({ _id: driverId })
    .then(driver => {
      res.status(204).send(driver);
    })
    .catch(next);
};
