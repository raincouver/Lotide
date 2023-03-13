const eqArrays = require('./eqArrays');

/* // FUNCTION IMPLEMENTATION
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

  // if (arrX.length !== arrY.length) {
  //   return false;
  // }
  // for (let i of arrX){
  //   if (arrX[i] !== arrY[i]) {
  //     return false;
  //   }
  // }
  // return true;

}; */

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arrX,arrY) {
  
  //Assertion fails if two arrays are not equal
  if (!eqArrays(arrX,arrY)) {
    console.log(`❌❌Assertion Failed: ${arrX} !== ${arrY}\n`);
    return;
  }

  //Happy Path
  console.log(`✅✅Assertion Passed: ${arrX} === ${arrY}\n`);
};

module.exports = assertArraysEqual;

