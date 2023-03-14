// test/assertEqualTest.js
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE
describe("#eqObject", () => {
  it("returns true for shirtObject = { color: 'red', size: 'medium' } and anotherShirtObject = { size: 'medium', color: 'red' }", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for shirtObject = { color: 'red', size: 'medium' } and     const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true for multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' } and anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] }", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' } and longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});