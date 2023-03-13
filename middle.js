// ACTUAL FUNCTION
const middle = function(array) {

  let results = [];

  //when array has less than 2 in length
  if (array.length <= 2) {
    return (results);
  }
  
  //when arry leng is even
  if (array.length % 2 === 0) {
    results.push(array[array.length / 2 - 1]);
    results.push(array[array.length / 2]);
    return (results);
  }
  
  //when the array length is odd
  results.push(array[array.length / 2 - 1 / 2]);
  return (results);
  
};

module.exports = middle;

 
