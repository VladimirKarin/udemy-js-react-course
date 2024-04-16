'use strict';

//DATA TYPES

/*

Data types are devided in 2 groups:
    - Simple types (primitives)
    - Complex types (objects)
            * Special objects
            * Ordinary objects

Simple data types are:
    - Numbers: 1, 2, 3,...
*/
let number = 1;

console.log(4 / 0); //Infinity
console.log('number' * 5); //NaN - Not A Number.
/*
    - Strings: 'Hello', "World", `!`.
*/
let string = 'Hello World!';
/*
    - Boolean: true, false.
*/
let isTrue = true;
/*
    - null - something that doesn't exist
*/
console.log(nonExistingVariable); // It will give as null, because no variable with that name has been declared previously.
/*
    - undefined - something that exists, but doesn't have any 'meaning'. Empty variables.
*/
let emptyVariable;
console.log(emptyVariable); // it will show us 'undefined', because variable is empty.
/*
    - Symbol
    - BigInt - Shows big integers.

Complex Types (Special Objects)
    - arrays: [1, 2, 'two', true];
*/
let array = ['plum', 'rotten aplle', 'stinky grapes', 'holly banana'];
console.log(array[2]); //Numbering starts from 0. The console log will show us 'stinky grapes'.
/*
    - functions
    - Data Objects
    - Regular expressions
    - errors

*/
const object = {
    name: 'Stinky',
    age: 30,
    isMarried: false,
};

console.log(object.name);
console.log(object['age']);
/*

*/
