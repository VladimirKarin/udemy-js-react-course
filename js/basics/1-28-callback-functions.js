'use strict';

/*
//Callback function:

    A callback function in JavaScript is a function that is passed as an argument to another function and is executed 
after the first function has completed its task. It's like giving someone instructions to call you back after they 
finish doing something else. This helps manage tasks that take time, like loading data from a server, by ensuring 
certain code runs only when the previous task is done.

//Anonymous Function:

    An anonymous function in JavaScript is a function that doesn't have a name. It's often used when you need a quick, 
one-time function, and is typically assigned to a variable or passed directly as an argument to another function. For 
example, you might use an anonymous function to handle a button click without having to define a separate named function.

*/

function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 1500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I'm learning: ${lang}`);
    callback();
}

function iHavePassed() {
    console.log(`I've just passed this lesson.`);
}

learnJS('JavaScript', iHavePassed);
