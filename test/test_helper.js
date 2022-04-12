const mongoose = require("mongoose");
require("dotenv").config();

before(done => {
  mongoose.connect(process.env.MONGODB_URI_TEST);
  mongoose.connection
    .once("open", () => done())
    .on("error", err => {
      console.warn("Warning", error);
    });
});

beforeEach(done => {
  const { drivers } = mongoose.connection.collections;
  drivers
    .drop()
    .then(() => {
      done();
    })
    .catch(() => done());
});
