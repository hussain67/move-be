const assert = require("assert");
const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");
const Driver = mongoose.model("driver");

describe("Driver controller", () => {
  it("POST to /api/drivers  create a new driver", done => {
    Driver.count().then(count => {
      request(app)
        .post("/api/drivers")
        .send({ email: "test@test.com" })
        .end(() => {
          Driver.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
  it("PUT to /api/drivers/:id edit an existing driver", done => {
    const driver = new Driver({ email: "shahid@shahid.com", driving: true });
    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: false })
        .end(() => {
          Driver.findOne({ email: "shahid@shahid.com" }).then(driver => {
            assert(driver.driving === false);
            done();
          });
        });
    });
  });
  it("DELETE to /api/drivers/:id", done => {
    const driver = new Driver({ email: "shahid@shahid.com", driving: true });
    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() => {
          Driver.findById({ _id: driver._id }).then(driver => {
            assert(driver === null);
            done();
          });
        });
    });
  });
});
