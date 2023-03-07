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
const head = function(arrX) {
  if (typeof arrX !== "object") {
    return arrX;
  } else if (arrX.length === 0) {
    return undefined;
  } else {
    return arrX[0];
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 0);
assertEqual(head([5]), 5);
assertEqual(head(5), 5);
assertEqual(head(), 0);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");