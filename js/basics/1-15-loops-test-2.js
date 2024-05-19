'use strict';

// 1) Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// 2) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// 3) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    data.forEach((element, index, array) => {
        if (typeof element === 'number') {
            array[index] = element * 2;
        } else if (typeof element === 'string') {
            array[index] += ' - done';
        }
    });

    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];

    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }
    // result = data.slice().reverse();   //Also effective, until the point when array becomes bigger.

    // Не трогаем
    return result;
}

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('массив result не аналогичен массиву arr', function () {
        expect(firstTask()).toEqual([3, 5, 8, 16, 20, 23, 50]);
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('массив data получен не в нужном виде', function () {
        expect(secondTask()).toEqual([
            10,
            20,
            'Shopping - done',
            40,
            'Homework - done',
        ]);
    });
});

describe('Проверяем третью задачу на ошибки:', function () {
    it('массив result получен не в нужном виде', function () {
        expect(thirdTask()).toEqual(['Homework', 20, 'Shopping', 10, 5]);
    });
});
