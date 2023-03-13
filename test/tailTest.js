// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailedWords = tail(words);
console.log('//tail(["Yo Yo", "Lighthouse", "Labs"]) Should give ["Lighthouse", "Labs"]');
console.log(`tail(["Yo Yo", "Lighthouse", "Labs"]):`, tailedWords);
console.log('//original array should still have 3 elements!');
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log('//tailed array should have 2 element!');
assertEqual(tailedWords.length, 2); // tailed array should have 0 element!

const words1 = ["Yo Yo"];
const tailedWord1 = tail(words1);
console.log('//tail(["Yo Yo"]) Should give []');
console.log(`tail(["Yo Yo"]):`, tailedWord1);
console.log('//original array should still have 1 elements!');
assertEqual(words1.length, 1); // original array should still have 1 elements!
console.log('//tailed array should have 0 element!');
assertEqual(tailedWord1.length, 0); // tailed array should have 0 element!

const words2 = [];
const tailedWord2 = tail(words2);
console.log('//tail([]) Should give []');
console.log(`tail([]):`, tailedWord2);
console.log('//original array should still have 0 elements!');
assertEqual(words2.length, 0); // original array should still have 0 elements!
console.log('//tailed array should have 0 element!');
assertEqual(tailedWord2.length, 0); // tailed array should have 0 element!