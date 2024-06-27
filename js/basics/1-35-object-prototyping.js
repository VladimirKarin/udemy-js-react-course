'use strict';

let str = 'string';
let strObj = new String(str);

console.log(str);
console.log(strObj);

const soldier = {
    health: 400,
    armor: 100,
    attack: 50,
    sayHello: function () {
        console.log('Yes, Sir!');
    },
};

const johnConner = {
    health: 100,
};

//Depricated version of creating a prototype
johnConner.__proto__ = soldier; // Old version of prototype usage. Not being used. Depricated.

console.log(johnConner);
console.log(johnConner.armor);
johnConner.sayHello();

//Usable version of creating a prototype

Object.setPrototypeOf(johnConner, soldier);

const saraConner = Object.create(soldier);

saraConner.sayHello();
