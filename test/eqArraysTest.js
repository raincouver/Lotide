// test/assertEqualTest.js
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


// TEST CODE
describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for eqArrays([], [0, 2, 3])", () => {
    assert.strictEqual(eqArrays([], [0, 2, 3]), false);
  });

  it("returns false for eqArrays([3, 2, 1], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);
  });

  it("returns false for eqArrays([1, 2, 3], [1, 2, 3, 4])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
});