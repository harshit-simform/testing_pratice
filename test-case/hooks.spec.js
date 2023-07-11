const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
var name = "harshit";

describe("hooks tests", function () {
  after(function () {
    console.log("will called in last when all test case are over");
  });

  before(function () {
    console.log("will called at first before executing any test case");
  });

  afterEach(function () {
    console.log("will called after each test case is over");
  });

  beforeEach(function () {
    console.log("will called before each test case is being executed");
  });

  it("check type", function () {
    expect(name).to.be.an("string");
  });

  it("check value", function () {
    expect(name).to.be.equal("harshit");
  });

  // we use only if we want to test that particular test case only and use skip to not to test that case basically means skip the test
  //   it.only("check length", function () {
  //     expect(name).to.be.a.lengthOf(7);
  //   });
});

//we can also use skip and only while describing the test case
describe.skip("demo check", function () {
  it("check demo value", function () {
    expect("abc").to.be.equal("abc");
  });
});
