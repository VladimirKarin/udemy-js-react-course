// OPERATORS

//UNARY PLUS
// Unary plus- is a plus, that stands before the operand and evaluates it to a type of a number.

const stringNumber = '6';
console.log(4 + +stringNumber);

//INCREMENT & DECREMENT
/*
 The increment (++) operator increments (adds one to) its operand and returns the value before or after 
the increment, depending on where the operator is placed.

 The decrement (--) operator decrements (subtracts one from) its operand and returns the value before or 
after the decrement, depending on where the operator is placed.

*/
let incr = 10,
    decr = 10;

let prefixIncr = ++incr;
let prefixDecr = --decr;

/*
console.log(++incr);
console.log(--decr);

The code will return original incr and decr values, but will change it afterwords. 
*/

let postfixIncr = incr++;
let postfixDecr = decr--;

/*
console.log(incr++);
console.log(decr--);

The code will return calculated value.  
*/

console.log(incr);
console.log(decr);

//%
//% returns the remainder.
console.log(10 % 3);
/*

// =

= - asigns the value to the variable.

*/
const variable = 'asigned';
/*


== compares if values are equal.
*/
console.log(2 * 4 == 8);
true;
console.log(2 * 4 == '8');
true;
/*

=== compares if values AND data types are equal.

*/
console.log(2 * 4 === 8);
true;
console.log(2 * 4 === '8');
false;
/*

//    && ||

&& - and. Both conditions should be true. Or will be true until one of the conditions becomes false.

*/
const isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed); //True
console.log(isChecked && !isClosed); //False
console.log(!isChecked && !isClosed); //False
/*
|| - or. One of conditions should be true. Or will be true, as long as one of the conditions is true.

*/
console.log(isChecked || isClosed); //True
console.log(isChecked || !isClosed); //True
console.log(!isChecked || !isClosed); //False
/*


*/
