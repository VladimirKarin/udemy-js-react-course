'use strict';
// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// Место для первой задачи
/*
//First Version
function getTimeFromMinutes(minutes) {
  if (!Number.isInteger(minutes) || minutes < 0){
    return 'Ошибка, проверьте данные';
  }
  
  const hours = Math.trunc(minutes / 60);
  const minutesLeft = minutes - (hours * 60);

  if (hours == 1 || hours == 21) {
    return `Это ${hours} час и ${minutesLeft} минут`;
  } 
  if (2 <= hours <= 4 || 22 <= hours <= 24) {
      return `Это ${hours} часа и ${minutesLeft} минут`;
  }
  if ( hours == 0 || 5 <= hours <= 20) {
      return `Это ${hours} часов и ${minutesLeft} минут`;
  }

 }
 */

//Second Version
function getTimeFromMinutes(minutes) {
    if (!Number.isInteger(minutes) || minutes < 0 || minutes > 600) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.trunc(minutes / 60);
    const minutesLeft = minutes % 60;

    if (hours === 0) {
        return `Это 0 часов и ${minutesLeft} минут`;
    } else if (hours === 1 || (hours > 20 && hours % 10 === 1)) {
        return `Это ${hours} час и ${minutesLeft} минут`;
    } else if (
        (hours >= 2 && hours <= 4) ||
        (hours > 20 && hours % 10 >= 2 && hours < 30 && hours % 10 <= 4)
    ) {
        return `Это ${hours} часа и ${minutesLeft} минут`;
    } else {
        return `Это ${hours} часов и ${minutesLeft} минут`;
    }
}

// Место для второй задачи

//First Version
/*
function findMaxNumber() {
  const numbersArray = Array.from(arguments);
  
  if (numbersArray.length < 4 ) {
    return 0;
  }
  for (let i = 0; i < numbersArray.length; i++) {
    if (typeof numbersArray[i] != 'number') {
      return 0;
    }
  }
  
  return Math.max(...numbersArray);

}
*/

//Second Version:
function findMaxNumber(...numbers) {
    if (
        numbers.length !== 4 ||
        numbers.some((num) => typeof num !== 'number')
    ) {
        return 0;
    }

    return Math.max(...numbers);
}

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(getTimeFromMinutes(50)).toEqual(jasmine.any(String));
    });
    it('вызов функции с верным аргументом дает неправильный результат', function () {
        expect(getTimeFromMinutes(150)).toEqual('Это 2 часа и 30 минут');
        expect(getTimeFromMinutes(0)).toEqual('Это 0 часов и 0 минут');
        expect(getTimeFromMinutes(60)).toEqual('Это 1 час и 0 минут');
        expect(getTimeFromMinutes(250)).toEqual('Это 4 часа и 10 минут');
    });
    it('вызов функции с дробным аргументом дает неправильный результат', function () {
        expect(getTimeFromMinutes(50.5)).toEqual('Ошибка, проверьте данные');
    });
    it('вызов функции с не числовым аргументом дает неправильный результат', function () {
        expect(getTimeFromMinutes('50.5')).toEqual('Ошибка, проверьте данные');
    });
    it('вызов функции с отрицательным аргументом дает неправильный результат', function () {
        expect(getTimeFromMinutes(-50)).toEqual('Ошибка, проверьте данные');
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('вызов функции не возвращает число', function () {
        expect(findMaxNumber(1, 5, 6.6, 11)).toEqual(jasmine.any(Number));
    });
    it('вызов функции с верными аргументоми дает неправильный результат', function () {
        expect(findMaxNumber(1, 5, 6.6, 11)).toEqual(11);
        expect(findMaxNumber(1, 5, '6', '10')).toEqual(0);
        expect(findMaxNumber(1, 50, 6.6, 11)).toEqual(50);
        expect(findMaxNumber(250)).toEqual(0);
    });
});
