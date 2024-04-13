'use strict';
// Variables and 'use strict' mode.

/* 
//'USE STRICT'
"use strict"; Defines that JavaScript code should be executed in "strict mode".
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

//VARIABLES
Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable: var carName; 
After the declaration, the variable is empty (it has no value). There are 3 types of variables: let, const, var.

let and var- are changeable variables. var is the older version.
ECMAScript6 (ES6 / JavaScript 2015) encourage you to declare variables with let not var.

const- is almost unchangeable variable. 
*/

//changeable
let number = 5;

// ALMOST not changeable
const leftBorderWidth = 1;

number = 10;
console.log(number);

//NOT changeable variables "ALMOST" case.
const obj = {
    a: 100,
};

obj.a = 15;
console.log(obj);

//Old variable
console.log('This is hoisting:' + oldVariable);
var oldVariable = 'old';
console.log('It works: ' + oldVariable);

aStrict = 15;
console.log(aStrict);
// Without 'use strict' - it will work, with it- won't.
