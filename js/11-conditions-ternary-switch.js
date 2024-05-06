'use strict';

if (115 == 'One hundred and fifteen') {
    console.log('Works fine.');
} else {
    console.log('Error');
}

115 == 'One hundred and fifteen'
    ? console.log('Works fine.')
    : console.log('Error');

const num = 50;

if (num < 49) {
    console.log('Not enough, dude 1');
} else if (num > 100) {
    console.log('Too much, dude 1');
} else {
    console.log('Bingo, dude! 1');
}

num < 49
    ? console.log('Not enough, dude 2')
    : num > 100
    ? console.log('Too much, dude 2')
    : console.log('Bingo, dude! 2');

switch (num) {
    case 49:
        console.log('Not enough, dude 3');
        break;
    case 101:
        console.log('Too much, dude 3');
        break;
    case 50:
        console.log('Bingo, dude! 3');
        break;
    default:
        console.log('Not this time, Dude. Not this time...');
        break;
}
