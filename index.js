console.log('Hello, npm!');

var colors = require('colors');
console.log('Hello,'.red, 'npm!'.green);

var offset = new Date().getTimezoneOffset();
console.log('offset', offset);

var expirationDateValue =  Date.parse('2023-08-03');
var expDate = new Date(expirationDateValue);
var expDateOffset = expDate.getTimezoneOffset();

console.log('expDateOffset', expDateOffset); 
