const chai = require("chai");
const expect = chai.expect;
const Student = require("../controllers.js/studentController");
const studentObj = new Student();
const nock = require("nock");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../server");
const v = "id";

describe("-------------api test--------", function () {
  it("Get user from express api", function (done) {
    chai
      .request(server)
      .get("/user")
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.all.keys("status", "data");
        expect(res.body.data)
          .to.be.an("Array")
          .with.a.lengthOf(1)
          .and.deep.include({ id: 1 });
        done();
      });
  });
});
