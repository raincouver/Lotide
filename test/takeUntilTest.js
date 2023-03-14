const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

// TEST CASES
describe('#takeUntil', () => {
  it('returns for given array and function', () => {
    assert.deepEqual(
      takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),
      [ 1, 2, 5, 7, 2 ]);
  });

  it('returns  [ "I\'ve", "been", "to", "Hollywood" ] for given array ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"] and function x => x === ","', () => {
    assert.deepEqual(
      takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),
      [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

  it('returns [1, 2, 5] for given array [1, 2, 5, 7, 2, -1, 2, 4, 5] and function x => x === 7', () => {
    assert.deepEqual(
      takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x === 7),
      [1, 2, 5]);
  });

  it('returns [1, 2, 5, 7, 2, -1, 2, 4, 5] for given array [1, 2, 5, 7, 2, -1, 2, 4, 5] and function x => x === 9', () => {
    assert.deepEqual(
      takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x === 9),
      [1, 2, 5, 7, 2, -1, 2, 4, 5]);
  });
});

