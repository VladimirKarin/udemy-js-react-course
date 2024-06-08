'use strict';

let a = 5;
let b = a;
console.log(`a = ${a}, b = ${b}`);

b = b + 5;
console.log(`a = ${a}, b = ${b}`);

const object = {
    a: 13,
    b: 11,
};

const copyOfTheObject = object; // it doesn't copy the object, it puts  a link on the object instead.
copyOfTheObject.a = 10;

console.log(`object = ${object}, copyOfTheObject = ${copyOfTheObject}`);

function objectCopier(mainObject) {
    let coppiedObject = {};

    let key;
    for (key in mainObject) {
        coppiedObject[key] = mainObject[key];
    }
    return coppiedObject;
}

const numbers = {
    a: 1,
    b: 2,
    c: {
        x: 13,
        y: 7,
        z: 'twenty one',
    },
};

const coppiedNumbers = objectCopier(numbers);

console.log(coppiedNumbers);

coppiedNumbers.a = 13;
coppiedNumbers.c.z = 21;

console.log(numbers);
console.log(coppiedNumbers);

//If during creation of not deep copy of the object, that all inner keys, that are objects will be presented (coppied)
// like a link to the key of the object which is being coppied. And all further changes will affect it.

const anotherObject = {
    o: 22,
    p: 55,
    q: 98,
};

const oneBigObject = Object.assign(numbers, anotherObject);
console.log(oneBigObject);
//Object.assign- concats 2 objects. first mentioned will be first part of the new object, and second shows what to copy
// to the first one.

const copyOfAnotherObject = Object.assign({}, anotherObject);
copyOfAnotherObject.q = 100;

console.log(anotherObject);
console.log(copyOfAnotherObject);

//Copying arrays.

const oldArray = ['a', 'b', 'c', 'd', 'e'];
// const newArray = oldArray; // light copy of oldArray. Changing somethins in newArray, will affect the oldArray.
const newArray = oldArray.slice();
newArray[1] = 'Letter B';

console.log(oldArray);
console.log(newArray);

//Spread operators

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'fb', 'ig'];

console.log(internet);

function logger(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const serverData = [2, 5, 9];
logger(...serverData);

//Copying Arrays with spread operator
const testArray = [1, 2, 3, 'four', 'five', 'six'];
const copyOfTestArray = [...testArray];

console.log(copyOfTestArray);

copyOfTestArray[3] = 4;

console.log(testArray);
console.log(copyOfTestArray);

//Copying objects with spread operator

const testObject = {
    a: 1,
    b: 'two',
    c: 'three',
};
const copyOfTestObject = { ...testObject };

console.log(copyOfTestObject);

copyOfTestObject.c = 3;

console.log(testObject);
console.log(copyOfTestObject);
