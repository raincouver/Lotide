const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
console.log('//assertArraysEqual(middle([1]),[]) Should Pass✅');
assertArraysEqual(middle([1]),[]); // => []

console.log('//assertArraysEqual(middle([1,2]),[]) Should Pass✅');
assertArraysEqual(middle([1,2]),[]);

console.log('//assertArraysEqual(middle([1,2,3]),[2])  Should Pass✅');
assertArraysEqual(middle([1,2,3]),[2]);

console.log('//assertArraysEqual(middle([1,2,3,4]),[2,3])  Should Pass✅');
assertArraysEqual(middle([1,2,3,4]),[2,3]);

console.log('//assertArraysEqual(middle([1,2,3,4,5]),[3])  Should Pass✅');
assertArraysEqual(middle([1,2,3,4,5]),[3]);

console.log('//assertArraysEqual(middle([1,2,3,4,5,6]),[3,4])  Should Pass✅');
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);