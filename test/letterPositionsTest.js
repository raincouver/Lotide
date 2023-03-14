const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const test = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

const resultTest = letterPositions("lighthouse in the house");

describe('#letterPositions', () => {
  it('returns index number of l which is [0] for letterPositions("lighthouse in the house")[l]', () => {
    assert.deepEqual(test["l"], resultTest["l"]);
  });

  it('returns index number of i which is [1, 11] for letterPositions("lighthouse in the house")[l]', () => {
    assert.deepEqual(test["i"], resultTest["i"]);
  });

  it('returns index number of g which is [2] for letterPositions("lighthouse in the house")[l]', () => {
    assert.deepEqual(test["g"], resultTest["g"]);
  });

  it('returns index number of e which is [9, 16, 22] for letterPositions("lighthouse in the house")[l]', () => {
    assert.deepEqual(test["e"], resultTest["e"]);
  });
});

