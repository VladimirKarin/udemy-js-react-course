'use strict';
// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

// Место для третьей задачи
function getMathResult(number, multiplier) {
    let result = '';

    if (typeof multiplier === 'string' || multiplier <= 0) {
        return number;
    } else {
        for (let i = 1; i <= multiplier; i++) {
            result += number * i;
            for (let i = 1; i < multiplier - 1; i++) {
                result += '---';
            }
        }
    }

    return result.slice(0, -3);
}

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(sayHello('Alex')).toEqual(jasmine.any(String));
    });
    it('неверный формат строки', function () {
        expect(sayHello('Alex')).toMatch('Привет, ');
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('вызов функции не возвращает массив', function () {
        expect(returnNeighboringNumbers(5)).toEqual(jasmine.any(Array));
    });
    it('в массиве не 3 числа', function () {
        const secondTaskArrNum = returnNeighboringNumbers(5);
        const isAllNumbers = secondTaskArrNum.every(
            (num) => typeof num === 'number'
        );

        expect(isAllNumbers).toBeTruthy();
    });
    it('в массиве не все числа', function () {
        const secondTaskArrNum = returnNeighboringNumbers(5);

        expect(secondTaskArrNum.length).toEqual(3);
    });
    it('неверный вывод чисел на основе аргумента', function () {
        const secondTaskArrNum = returnNeighboringNumbers(5);

        expect(secondTaskArrNum[0]).toEqual(secondTaskArrNum[1] - 1);
        expect(secondTaskArrNum[2]).toEqual(secondTaskArrNum[1] + 1);
    });
});

describe('Проверяем третью задачу на ошибки:', function () {
    it('вызов функции не возвращает правильный результат при верных аргументах', function () {
        expect(getMathResult(5, 3)).toEqual('5---10---15');
    });
    it('неверный результат при не числовом втором аргументе', function () {
        expect(getMathResult(5, -3)).toEqual(5);
        expect(getMathResult(5, 0)).toEqual(5);
        expect(getMathResult(5, 'str')).toEqual(5);
    });
});
