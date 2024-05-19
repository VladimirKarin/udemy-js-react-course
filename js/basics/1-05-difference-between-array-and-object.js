//The difference between array and object. Syntax opportunities.
/*
The main difference between array and object is that in array (which is also a type of object) the pair key: value is written differently. 
The key is the order number of value, starts with 0. 
*/

//Array
const array = [1, 2, 3];

//Object
const arrayObject = {
    a: 1,
    b: 2,
    c: 3,
    abc: {
        def: {},
    },
};

arrayObject.d = 4;

console.log(array[1]);
console.log(arrayObject['b']);
console.log(arrayObject.d);

const object = { a: 1, b: 2, c: 2 }; // Object
const employeeSalary = {
    'Pretty Anna': 500,
    'Sexy Alice': 800,
    'Lucky Vladimir': 1500,
};
