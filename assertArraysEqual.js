// FUNCTION IMPLEMENTATION
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

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arrX,arrY) {
  if (eqArrays(arrX,arrY)) {
    console.log(`✅Assertion Passed: ${arrX} === ${arrY} ✅`);
  } else if (!eqArrays(arrX,arrY)) {
    console.log(`❌Assertion Failed: ${arrX} !== ${arrY} ❌`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([], [0, 2, 3]); // => should FAIL
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL