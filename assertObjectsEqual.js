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
const eqArrays = function(arrX,arrY) {

  if (arrX.length === arrY.length) {
    if (arrX.length === 0) {
      return true;
    } else if (arrX[0] === arrY[0]) {
      return (eqArrays(arrX.slice(1),arrY.slice(1)));
    }
    return false;
  }
  return false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // They have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // The value for each key in one object is the same as the value for that same key in the other object
  for (let key1 in object1) {

    if (Array.isArray(object1[key1])) {

      if (!eqArrays(object1[key1],object2[key1])) {

        return false;

      }
    } else if (object1[key1] !== object2[key1]) {

      return false;

    }
  }

  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`);
  } else if (!eqObjects(actual, expected)) {
    console.log(`❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ❌`);
  }
};


// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(shirtObject,anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject,longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject,longSleeveMultiColorShirtObject); // => false