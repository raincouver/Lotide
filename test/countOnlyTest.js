const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// TEST CODE
describe("#countOnly", () => {
  it("returns 1 for results['Jason']", () => {
    assert.strictEqual(results["Jason"], 1);
  });

  it("returns 2 for results['Fang']", () => {
    assert.strictEqual(results["Fang"], 2);
  });

  it("returns undefined for results['Agouhanna']", () => {
    assert.strictEqual(results["Agouhanna"], undefined);
  });

  it("returns undefined for results['Karima']", () => {
    assert.strictEqual(results["Karima"], undefined);
  });
});