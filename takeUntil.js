// TESTING
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


//Expected Input
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

//Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  result = [];
  for (let item of array){
    if (callback(item)){
      return (result);
    }
    result.push(item);
  }
  
  // ...
}

// TEST CASES
assertArraysEqual(
  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), 
  [ 1, 2, 5, 7, 2 ]); 
assertArraysEqual(
  takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), 
  [ 'I\'ve', 'been', 'to', 'Hollywood' ]); 
assertArraysEqual(
  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x === 7), 
  [1, 2, 5]); 
assertArraysEqual(
  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x === 4), 
  [1, 2, 5, 7, 2, -1, 2]);
