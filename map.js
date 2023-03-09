// TESTING FUNCTIONS
const eqArrays = function(arrX,arrY) {

  if (arrX.length === arrY.length) {
    if (arrX.length === 0){
      return true;
    } else if (arrX[0] === arrY[0]) {
      return (eqArrays(arrX.slice(1),arrY.slice(1)));
    }
    return false;
  }
  return false;
};


const assertArraysEqual = function(arrX,arrY) {
  if (eqArrays(arrX,arrY)) {
    console.log(`✅Assertion Passed: ${arrX} === ${arrY} ✅`);
  } else if (!eqArrays(arrX,arrY)) {
    console.log(`❌Assertion Failed: ${arrX} !== ${arrY} ❌`);
  }
};

// FUNCTION IMPLEMENTATION
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

// TESTS
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); 
assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", 'a' ,"o"]); 
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]); 
assertArraysEqual(map(words, word => word=""), ["", "", "", "", ""]); 
