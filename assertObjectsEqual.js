const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  //Assertion fails if two objects are not equal
  if (!eqObjects(actual, expected)) {
      console.log(`❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ❌`);
      return;
    }

  //Happy Path
  console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`);
};

module.exports = assertObjectsEqual;

