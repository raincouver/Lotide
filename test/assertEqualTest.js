const assertEqual = require('../assertEqual');

// // TEST CODE
console.log('assertEqual("Lighthouse Labs", "Bootcamp") Should Fail❌');assertEqual("Lighthouse Labs", "Bootcamp");

console.log('assertEqual(1, 1) Should Pass✅'); 
assertEqual(1, 1);

console.log('assertEqual(1, 2) Should Fail❌'); 
assertEqual(1, 2);

console.log('assertEqual(1, -1) Should Fail❌'); 
assertEqual(1, -1);

console.log('assertEqual(1, "1") Should Fail❌'); 
assertEqual(1, "1");
