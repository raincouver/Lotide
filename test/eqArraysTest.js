const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log('//eqArrays([1, 2, 3], [1, 2, 3]) Should Pass✅'); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log('//eqArrays([], [0, 2, 3]), true) Should Fail❌'); 
assertEqual(eqArrays([], [0, 2, 3]), true); // => should FAIL

console.log('//eqArrays([3, 2, 1], [1, 2, 3]) Should Fail❌'); 
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), true); // => should FAIL

console.log('//eqArrays([1, 2, 3], [1, 2, 3, 4]) Should Fail❌'); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
