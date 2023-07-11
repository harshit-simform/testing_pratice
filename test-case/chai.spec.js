const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

const username = "harshit";
const userList = ["harshit"];
const obj = {
  users: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ],
  address: {
    country: "India",
    state: "Gujarat",
  },
  phone_no: [12345678, 987654321],
};
/////////// assert ///////////

describe("------check types with assert----", function () {
  it("check string", function () {
    assert.typeOf(username, "string");
  });

  it("check match", function () {
    assert.equal(username, "harshit");
  });

  it("check length", function () {
    assert.lengthOf(userList, 1);
  });
});

////////// should ///////////

describe("------check types with should----", function () {
  it("check string", function () {
    username.should.be.a("string");
  });

  it("check match", function () {
    username.should.equal("harshit");
  });

  it("check length", function () {
    userList.should.have.a.lengthOf(1);
  });
});

///////// except ////////

describe("------check types with expect----", function () {
  it("check string", function () {
    expect(username).to.be.a("string");
  });

  it("check match", function () {
    expect(username).to.equal("harshit");
  });

  it("check length", function () {
    expect(userList).to.have.a.lengthOf(1);
  });

  it("check all property", function () {
    expect(obj).to.have.all.keys("users", "address", "phone_no");
  });

  it("check all property", function () {
    expect(obj).to.have.a.property("users").with.lengthOf(3);
    // for only checking that the array conatin this members or not
    expect(obj)
      .to.have.a.property("phone_no")
      .to.be.a("array")
      .with.lengthOf(2)
      .and.have.members([987654321, 12345678]);
    // for checking that the array conatins the members in same order as provided in the test case
    expect(obj)
      .to.have.a.property("phone_no")
      .to.be.a("array")
      .with.lengthOf(2)
      .and.deep.equal([12345678, 987654321]);
  });

  it("check nested property values", function () {
    expect(obj).to.have.a.nested.property("address.country").equal("India");
    expect(obj).to.have.a.nested.include({ "address.state": "Gujarat" });
  });
});
