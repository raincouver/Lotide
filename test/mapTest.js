const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
// TESTS
describe('#map', () => {
  it('returns ["g", "c", "t", "m", "t"] for given words and callback function word => word[0]', () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  it('returns ["r", "o", "o", "a" ,"o"] for given words and callback function word => word[1]', () => {
    assert.deepEqual(map(words, word => word[1]), ["r", "o", "o", "a" ,"o"]);
  });

  it('returns [6, 7, 2, 5, 3] for given words and callback function word => word.length', () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });

  it('returns ["", "", "", "", ""] for given words and callback function word => word=""', () => {
    assert.deepEqual(map(words, word => word = ""), ["", "", "", "", ""]);
  });
});