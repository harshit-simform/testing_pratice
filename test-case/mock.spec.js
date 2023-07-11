const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const Student = require("../controllers.js/studentController");

const studentObj = new Student();

describe("-------------Mock--------", function () {
  it("count function called", function () {
    const mock = sinon.mock(studentObj);
    const expt = mock.expects("getExternal");
    expt.exactly(1).withArgs(40);
    studentObj.finalMarks(40);
    mock.verify();
  });
});
