// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected} ✅`);
  } else if (actual == expected) {
    console.log(`❌Assertion Failed: ${actual} is not the same type as ${expected} ❌`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} != ${expected} ❌`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


const test = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const resultTest = countLetters("lighthouse in the house");

assertEqual(test["l"], resultTest["l"]);
assertEqual(test["i"], resultTest["i"]);
assertEqual(test["g"], resultTest["g"]);
assertEqual(test["e"], resultTest["e"]);