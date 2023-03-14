const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns array ["hello", "world"] for given array ["hello", "world", "lighthouse"] and short array ["lighthouse"] to skip; and original input array is not modified', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it('returns array ["hello", "world"] for given array ["hello", "world", "lighthouse"] and short array ["lighthouse"] to skip', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

  
  it('returns array [] for given array ["1", "1", ""] and short array [1, "", "1"] to skip', () => {
    assert.deepEqual(without(["1", "1", ""], [1, "", "1"]), []);
  });
  
  it('returns array [] for given array ["1", "1", "2"] and short array [1, "2", "1"] to skip', () => {
    assert.deepEqual(without(["1", "1", "2"], [1, "2", "1"]),[]);
  });
  
  it('returns array ["2"] for given array ["1", "1", "2"] and short array [1, 2, "1"] to skip', () => {
    assert.deepEqual(without(["1", "1", "2"], [1, 2, "1"]), ["2"]);
  });
  
  it('returns array ["1", "2"] for given array ["1", "2", "3"] and short array [1, 2, "3"] to skip', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  
  it('returns array [2, 3] for given array [1, 2, 3] and short array [1] to skip', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});