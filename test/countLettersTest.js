const assert = require('chai').assert;
const countLetters = require('../countLetters');

// TEST CODE
describe("#countLetters", () => {
  it("returns true for countLetters('lighthouse in the house')['l'] and test = {l: 1}", () => {
    const test = {l: 1,i: 2,g: 1,h: 4,t: 2, o: 2,u: 2,s: 2,e: 3,n: 1};
    const resultTest = countLetters("lighthouse in the house");
    assert.strictEqual(test["l"], resultTest["l"]);
  });

  it("returns true for countLetters('lighthouse in the house')['i'] and test = {i: 2}", () => {
    const test = {l: 1,i: 2,g: 1,h: 4,t: 2, o: 2,u: 2,s: 2,e: 3,n: 1};
    const resultTest = countLetters("lighthouse in the house");
    assert.strictEqual(test["i"], resultTest["i"]);
  });

  it("returns true for countLetters('lighthouse in the house')['h'] and test = {h: 4}", () => {
    const test = {l: 1,i: 2,g: 1,h: 4,t: 2, o: 2,u: 2,s: 2,e: 3,n: 1};
    const resultTest = countLetters("lighthouse in the house");
    assert.strictEqual(test["h"], resultTest["h"]);
  });

  it("returns true for countLetters('lighthouse in the house')['g'] and test = {g: 1}", () => {
    const test = {l: 1,i: 2,g: 1,h: 4,t: 2, o: 2,u: 2,s: 2,e: 3,n: 1};
    const resultTest = countLetters("lighthouse in the house");
    assert.strictEqual(test["g"], resultTest["g"]);
  });

  it("returns true for countLetters('lighthouse in the house') and test = {l: 1,i: 2,g: 1,h: 4,t: 2, o: 2,u: 2,s: 2,e: 3,n: 1}", () => {
    const test = {l: 1,i: 2,g: 1,h: 4,t: 2, o: 2,u: 2,s: 2,e: 3,n: 1};
    const resultTest = countLetters("lighthouse in the house");
    assert.deepEqual(test, resultTest);
  });
});