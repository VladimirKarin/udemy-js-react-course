'use strict';
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => "0 1 1 2"

// fib(7) => "0 1 1 2 3 5 8"

// fib('7') => ""

// fib(1) => "0"

// fib(0) => ""

//First Version

/*
function fib(num) {
  if (typeof num == 'string' || !Number.isFinite(num) || !Number.isInteger(num)){
    return '';
  }
  
    let a = 0;
    let b = 1;
    let c = 0;
    let numbers = '';
  
  for (let i = 0; i < num; i++) {
    if (i == 0) {
      numbers += `0 `;
    }
    if (i == 1) {
      numbers += `1 `
    } 
    if(i >= 2){
      c = a + b;
      numbers += `${c} `;
    a = b
    b = c}
    
   
  }
  return numbers.trim();
}
*/

//Second Version

function fib(num) {
    if (
        typeof num === 'string' ||
        !Number.isFinite(num) ||
        !Number.isInteger(num)
    ) {
        return '';
    }

    let prevNum = 0;
    let currNum = 1;
    let nextNum = 0;
    let fibonacciSequence = '';

    for (let i = 0; i < num; i++) {
        if (i === 0) {
            fibonacciSequence += `${prevNum} `;
        }
        if (i === 1) {
            fibonacciSequence += `${currNum} `;
        }
        if (i >= 2) {
            nextNum = prevNum + currNum;
            fibonacciSequence += `${nextNum} `;
            prevNum = currNum;
            currNum = nextNum;
        }
    }

    return fibonacciSequence.trim();
}

// Тесты
describe('Проверяем задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(fib(5)).toEqual(jasmine.any(String));
    });
    it('вызов функции с верными аргументоми дает неправильный результат', function () {
        expect(fib(7)).toEqual('0 1 1 2 3 5 8');
        expect(fib(1)).toEqual('0');
        expect(fib(4)).toEqual('0 1 1 2');
    });
    it('вызов функции с нечисловым аргументом не возвращает пустую строку', function () {
        expect(fib('str')).toEqual('');
    });
    it('вызов функции с нулем не возвращает пустую строку', function () {
        expect(fib(0)).toEqual('');
    });
    it('вызов функции с дробным аргументом не возвращает пустую строку', function () {
        expect(fib(5.5)).toEqual('');
    });
});
