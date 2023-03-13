// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
const tailedWord1 = tail(words1);
assertEqual(words1.length, 1); // original array should still have 1 elements!
assertEqual(tailedWord1.length, 0); // tailed array should have 0 element!

const words2 = [];
const tailedWord2 = tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 0); // original array should still have 1 elements!
assertEqual(tailedWord2.length, 0); // tailed array should have 0 element!