'use strict';

//Objects

const obj = new Object(); // Almost not being used.

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red',
    },
    makeTest: function () {
        console.log('test');
    },
};

options.makeTest(); //Self written test

/*
//Destructuring:
    Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects and 
assign them to variables. Instead of accessing each value individually, you can "unpack" them in a single step. For 
example, from an array const [a, b] = [1, 2]; assigns 1 to a and 2 to b, and from an object const {x, y} = 
{x: 10, y: 20}; assigns 10 to x and 20 to y.

*/
const { border, background } = options.colors;
console.log(border, background);

//Object Method
console.log(Object.keys(options)); // Returns array with first level keys.
console.log(Object.keys(options).length); // Returns length of tht array with keys.

//This is how we can get the data from the object.
console.log(options.name);
console.log(options['colors']['border']);
console.log(options.colors.background);

//Deleteing the key: value.
// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(`The key ${i} has a value of ${options[key][i]}`);
        }
    } else {
        console.log(`The key ${key} has a value of ${options[key]}`);
        counter++;
    }
}
console.log(counter);
