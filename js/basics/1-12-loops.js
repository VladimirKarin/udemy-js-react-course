'use strict';

let num = 50;

// WHILE
// while (num < 55) {
//     console.log(num);
//     num++;
// }

//DO WHILE
// do {
//     console.log(num);
//     num++;
// } while (num < 55);

//FOR

for (let i = 1; i < 0; i++) {
    if (i === 33) {
        break;
    }
    console.log(i);
    i++;
}

for (let i = 1; i < 10; i++) {
    if (i === 33) {
        continue;
    }
    console.log(i);
    i++;
}
