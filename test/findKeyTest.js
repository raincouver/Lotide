const findKey = require('../findKey');
const assert = require('chai').assert;

// TEST CODE
describe('#findKey', () => {
  it('returns "noma" for x => x.stars === 2', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  it('returns "noma" for x => x.stars === 2', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  it('returns "elBulli" for x => x.stars === 4', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 4 },
      "Ora":       { stars: 6 },
      "Akelarre":  { stars: 4 }
    }, x => x.stars === 4), "elBulli");
  });

  it('returns "Blue Hill" for x => x.stars === 1', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 1 }
    }, x => x.stars === 1), "Blue Hill");
  });

  it('returns undefined for x => x.stars === 5', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 1 }
    }, x => x.stars === 5), undefined);
  });
});