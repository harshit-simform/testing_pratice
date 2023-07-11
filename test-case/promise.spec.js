const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const Student = require("../controllers.js/studentController");
const chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);
const studentObj = new Student();
const nock = require("nock");

describe("-------------promise--------", function () {
  it("check promise value", function () {
    return studentObj.dbData().then(function (result) {
      expect(result).to.be.equal(10);
    });
  });

  it("check promise value using package", function () {
    return expect(studentObj.dbData()).to.eventually.equal(10);
  });

  describe("-------------promise--------", function () {
    it("check promise value using package", function () {
      return studentObj.dbData().then((value) => {
        expect(value).to.equal(11);
      });
    });
  });

  it("api test", function (done) {
    const obj = { status: "ok", statusCode: 200 };
    const apiHit = nock("https://jsonplaceholder.typicode.com/")
      .get("/todos")
      .reply(200, obj);

    studentObj
      .getDataFromApi()
      .then(function (data) {
        expect(data).to.be.eql(obj);
        done();
      })
      .catch((error) => {
        done(new Error("error" + error));
      });
  });
});
