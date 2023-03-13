// assertEqual.js FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual !== expected) {
    console.log(`❌❌Assertion Failed: ${actual} !== ${expected}\n`);
    return;
  }

  //Happy Path
  console.log(`✅✅Assertion Passed: ${actual} === ${expected}\n`);
};

module.exports = assertEqual;

