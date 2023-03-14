// test/assertEqualTest.js
const expect = require('chai').expect;
const middle = require('../middle');


// TEST CODE
describe("#middle", () => {
  it("returns [] for [1]", () => {
    let actual = middle([1]);
    let expected = middle([]);
    expect(actual).to.eql(expected);
  });

  it("returns [] for [1, 2]", () => {
    let actual = middle([1,2]);
    let expected = [];
    expect(actual).to.eql(expected);
  });

  it("returns [2] for [1,2,3]", () => {
    let actual = middle([1,2,3]);
    let expected = [2];
    expect(actual).to.eql(expected);
  });

  it("returns [2, 3] for [1,2,3]", () => {
    let actual = middle([1,2,3,4]);
    let expected = [2,3];
    expect(actual).to.eql(expected);
  });

  it("returns [3] for [1,2,3,4,5]", () => {
    let actual = middle([1,2,3,4,5]);
    let expected = [3];
    expect(actual).to.eql(expected);
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    let actual = middle([1,2,3,4,5,6]);
    let expected = [3,4];
    expect(actual).to.eql(expected);
  });
});