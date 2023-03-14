// test
const assert = require('chai').assert;
const tail = require('../tail');


// TEST CODE
describe('#tail', () => {
  it('An empty array should yield an empty array for its tail', () => {
    let words = [];
    let tails = tail(words);
    assert.deepEqual(tails, []);
    assert.strictEqual(tails.length, 0);
    assert.strictEqual(words.length, 0);
  });

  it('An array with only one element should yield an empty array for its tail', () => {
    let words = ['Yo Yo'];
    let tails = tail(words);
    assert.deepEqual(tails, []);
    assert.strictEqual(tails.length, 0);
    assert.strictEqual(words.length, 1);
  });

  it("should be returning a new array and not modify the original array that is passed in; and return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    let words = ['Yo Yo', 'Lighthouse', 'Labs'];
    let tails = tail(words);
    assert.deepEqual(tails, ['Lighthouse', 'Labs']);
    assert.strictEqual(tails.length, 2);
    assert.strictEqual(words.length, 3);
  });
});