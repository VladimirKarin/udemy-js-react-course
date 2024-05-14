'use strict';

//Function Declaration.
//When function is being declared in the code flow.
// Is being created long befor the script is loaded, so we can use it befor the creation.
function showFirstMessage() {
    console.log('First message to show');
}

showFirstMessage();

let num = 50;

function showSecondMessage(text) {
    console.log(text);
    let num = 35;
}

showSecondMessage('Second message, from the argument.');
console.log(num);

function calcSum(a, b) {
    return a + b;
}
calcSum(5, 7);
console.log(`calcSum function: ${calcSum(5, 7)}`);
console.log(`calcSum function: ${calcSum(59, 5)}`);
console.log(`calcSum function: ${calcSum(976, 357)}`);

function ret() {
    let num = 113;
    return num;
}

const anotherNum = ret();
console.log(`ret() function: ${anotherNum}`);

//Function Expresion
//When function is being declared and placed in a variable.
// Is being created only when the flow get's to it. And we can use only after the creation!

const logger = function () {
    console.log("You've just been logged!");
};

logger();

//Arrow function

const calcMinus = (a, b) => a - b;
