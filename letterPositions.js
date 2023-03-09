
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


const letterPositions = function(sentence) {
  const results = {};
  let i = 0;

  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } 
      else {
        results[letter] = [];
        results[letter].push(i);
      }
      i += 1;
    } else {
      i += 1;
    }
  }

  return results;
};



const test = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

console.log(letterPositions("lighthouse in the house"));
const resultTest = letterPositions("lighthouse in the house");

assertArraysEqual(test["l"], resultTest["l"]);
assertArraysEqual(test["i"], resultTest["i"]);
assertArraysEqual(test["g"], resultTest["g"]);
assertArraysEqual(test["e"], resultTest["e"]);