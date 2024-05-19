'use strict';

// Необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

// Тесты
describe('Проверяем правильность фигуры:', function () {
    it('это не пирамида из 6ти линий', function () {
        expect(result).toEqual(
            '     *\n    ***\n   *****\n  *******\n *********\n***********\n'
        );
    });
});
