// FUNCTION IMPLEMENTATION
const eqArrays = function(arrX,arrY) {

  //If not the same length then the two arrays are not equal
  if (arrX.length !== arrY.length) {
    return false;
  }

  //Continue until the base case where both arrays have the same length of zero
  if (arrX.length !== 0) {

    //If same index with different values then they are not equal
    if (arrX[0] !== arrY[0]) {
      return false;
    }

    return (eqArrays(arrX.slice(1),arrY.slice(1)));
  }

  // Happy Path
  return true;
};

module.exports = eqArrays;
