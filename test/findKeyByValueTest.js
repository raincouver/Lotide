const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it('returns "drama" for "The Wire" of Object BestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns "comedy" for "Brooklyn Nine-Nine" of Object BestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it('returns "sci_fi" for "The Expanse" of Object BestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("returns undefined for 'That '70s Show' of Object BestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns undefined for "" of Object BestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });

  it('returns undefined for 1 of Object BestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 1), undefined);
  });

  it('returns undefined for undefined of Object BestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);
  });
});
