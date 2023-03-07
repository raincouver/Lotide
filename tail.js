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

// FUNCTION IMPLEMENTATION
const tail = function(arrX) {
  let tailed = [];
  if (typeof arrX !== "object") {
    return tailed;
  } else if (arrX.length === 0) {
    return tailed;
  } else {
    tailed = arrX;
    return tailed.slice(1);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
const tailedWord1 = tail(words1);
assertEqual(words1.length, 1); // original array should still have 1 elements!
assertEqual(tailedWord1.length, 0); // tailed array should have 0 element!

const words2 = [];
const tailedWord2 = tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 0); // original array should still have 1 elements!
assertEqual(tailedWord2.length, 0); // tailed array should have 0 element!