const assert = require("assert");
const app = require("../app");
const request = require("supertest");

describe("The express app", () => {
  it("handle the get request to /api", done => {
    request(app)
      .get("/api")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
