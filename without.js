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

// FUNCTION IMPLEMENTATION
const without = function(source,itemsToRemove) {

  let temp = [];
  let x = [];

  for (let i = 0; i < source.length; i++){
    temp.push(source[i]);
  }

  for (let i = 0; i < temp.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if (temp[i] === itemsToRemove[j]){
        temp[i] = "";
      }
    }
    if (temp[i] !== ""){
      x.push(temp[i]);
    }
  }
  return x
}




console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]) )// => ["1", "2"]
console.log(without(["1", "1", "2"], [1, 2, "1"]) )// => ["2"]
console.log(without(["1", "1", "2"], [1, "2", "1"])) // => []
console.log(without(["1", "1", ""], [1, "", "1"])) // => []

const words = ["hello", "world", "lighthouse"];
console.log(words)
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
console.log(words)
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



