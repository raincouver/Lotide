const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
console.log('//assertArraysEqual([1, 2, 3], [1, 2, 3]) Should Pass✅'); 
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

console.log('//assertArraysEqual([], [0, 2, 3]) Should Fail❌'); 
assertArraysEqual([], [0, 2, 3]); // => should FAIL

console.log('//assertArraysEqual([3, 2, 1], [1, 2, 3]) Should Fail❌'); 
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should FAIL

console.log('//assertArraysEqual([1, 2, 3], [1, 2, 3, 4]) Should Fail❌'); 
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
