'use strict';
//STRING METHODS

//LENGTH (shows number of characters)
const string = 'Something That Has To Be Written.';
const stringForModification = 'Yet another great string for modification.';
const array = [0, true, 2, 'string'];
const number = 15.4;
const stringNumber = '15.4px';

console.log(string.length);
console.log(array.length);

//toUpperCase() method - makes all string uppercase.
console.log(string.toUpperCase());

//toLowerCase() method -  makes all string lowerCase.
console.log(string.toLowerCase());

//indexOf() method - shows the index of asked string\character.
console.log(string.indexOf('Has'));

//.slice(x, y) method - modifies the string, and return the piece of string from the index X to Y.
//                      if there is only X, it will return the modified string beggining from X index up to the end.
console.log(stringForModification.slice(0, -10));

//.substring() method - modifies the string. Same as .slice(x, y) but doesn't support the negative meanings.
console.log(stringForModification.substring(0, 10));

//.substr(x, y) method - modifies string and returns everything that starts from X index and is Y length. (DEPRECATED)
console.log(stringForModification.substr(0, 8));

//NUMBER METHODS

//Math.round() - mathematical method, that rounds the number to the nearest whole number.
console.log(Math.round(number));

//parseInt() - method \ global function that converts number to another number system. Returns whole number
console.log(parseInt(stringNumber));
console.log(typeof parseInt(stringNumber));

//parseFloat() - method \ global function that converts number to another number system. Returns whole number
console.log(parseFloat(stringNumber));
console.log(typeof parseFloat(stringNumber));
