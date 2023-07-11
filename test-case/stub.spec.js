const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { listUser } = require("../controllers.js/userController.js");
const Student = require("../controllers.js/studentController");
const studentObj = new Student();

describe("-------stubs------", function () {
  it("function argument check", function () {
    // const external = sinon.stub(studentObj, "getExternal");
    // const internal = sinon.stub(studentObj, "getInternal");
    // external.withArgs(40).returns(10);
    // internal.withArgs(40).returns(10);
    const final = sinon.stub(studentObj, "finalMarks");
    final.withArgs(40).returns(10);

    expect(studentObj.finalMarks(40)).to.be.equal(10);
  });
});
