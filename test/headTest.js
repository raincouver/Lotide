// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
console.log('assertEqual(head([5,6,7]), 5) Should Pass✅'); 
assertEqual(head([5,6,7]), 5);

console.log('assertEqual(head([]), 0) Should Fail❌'); 
assertEqual(head([]), 0);

console.log('assertEqual(head([5]), 5) Should Pass✅'); 
assertEqual(head([5]), 5);

console.log('assertEqual(head(5), 5) Should Pass✅'); 
assertEqual(head(5), 5);

console.log('assertEqual(head(), 0) Should Fail❌'); 
assertEqual(head(), 0);

console.log('assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")  Should Pass✅'); 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");