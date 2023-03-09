// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let results = [];
  if (array.length <= 2){
    return (results);
  } else if (array.length % 2 === 0){
    results.push(array[array.length/2-1]);
    results.push(array[array.length/2]);
    return (results);
  } else if (array.length % 2 === 1){
    results.push(array[array.length/2 - 1/2]);
    return (results);
  }
}

// TEST CODE
assertArraysEqual(middle([1]),[]) // => []
assertArraysEqual(middle([1,2]),[]) 
assertArraysEqual(middle([1,2,3]),[2]) 
assertArraysEqual(middle([1,2,3,4]),[2,3]) 
assertArraysEqual(middle([1,2,3,4,5]),[3]) 
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]) 
