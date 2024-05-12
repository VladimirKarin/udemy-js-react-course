'use strict';
// 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// 2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// 3) При помощи цикла for выведите чётные числа от 2 до 10 включительно
// 4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

// 5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// Место для первой задачи
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        console.log(i);
        if (i === 14) {
            break;
        }
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }

    return arrayOfNumbers;
}

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('в консоли не цифры от 5 до 10', function () {
        let stdout = '';

        spyOn(console, 'log').and.callFake(function () {
            stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
        });

        firstTask();

        expect(stdout).toEqual('5\n6\n7\n8\n9\n10\n');
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('в консоли не цифры от 20 до 14', function () {
        let stdout = '';

        spyOn(console, 'log').and.callFake(function () {
            stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
        });

        secondTask();

        expect(stdout).toEqual('20\n19\n18\n17\n16\n15\n14\n');
    });
});

describe('Проверяем третью задачу на ошибки:', function () {
    it('в консоли не цифры 2, 4, 6, 8, 10', function () {
        let stdout = '';

        spyOn(console, 'log').and.callFake(function () {
            stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
        });

        thirdTask();

        expect(stdout).toEqual('2\n4\n6\n8\n10\n');
    });
});

describe('Проверяем четвертую задачу на ошибки:', function () {
    it('в консоли не цифры 3, 5, 7, 9, 11, 13, 15', function () {
        let stdout = '';

        spyOn(console, 'log').and.callFake(function () {
            stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
        });

        fourthTask();

        expect(stdout).toEqual('3\n5\n7\n9\n11\n13\n15\n');
    });
});

describe('Проверяем пятую задачу на ошибки:', function () {
    it('не получен массив [ 5, 6, 7, 8, 9, 10 ]', function () {
        expect(fifthTask()).toEqual([5, 6, 7, 8, 9, 10]);
    });
});
