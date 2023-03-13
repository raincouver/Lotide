// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 0);
assertEqual(head([5]), 5);
assertEqual(head(5), 5);
assertEqual(head(), 0);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");