'use strict';
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места.

// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

//First Version.

/*
Место для первой задачи
function calculateVolumeAndArea(sideLength) {
    let cubeArea = 0;
    let cubeVolume = 0;

    if (
        typeof sideLength == 'number' &&
        Number.isInteger(sideLength) &&
        sideLength > 0
    ) {
        cubeArea = Math.pow(sideLength, 2) * 6;
        cubeVolume = Math.pow(sideLength, 3);
        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}
*/

//Second Version.

function calculateVolumeAndArea(sideLength) {
    if (
        typeof sideLength !== 'number' ||
        !Number.isInteger(sideLength) ||
        sideLength <= 0
    ) {
        return 'При вычислении произошла ошибка';
    }

    const cubeVolume = sideLength * sideLength * sideLength;
    const cubeArea = 6 * sideLength * sideLength;

    return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

//First Version.

/*
Место для второй задачи

function getCoupeNumber(seatNumber) {
  if (seatNumber == 0 || seatNumber > 36){
    return 'Таких мест в вагоне не существует';
  }

  if ( !Number.isInteger(seatNumber) || !Number(seatNumber) || seatNumber < 0){
    return 'Ошибка. Проверьте правильность введенного номера места';
  }

  const compartmentNumber = Math.floor(seatNumber / 4);

  switch (compartmentNumber){
    case 0:
      return 1;
      break;
    case 1:
      return 2;
      break;
    case 2:
      return 3;
      break;
    case 3:
      return 4;
      break;
    case 4:
      return 5;
      break;
    case 5:
      return 6;
      break;
    case 6:
      return 7;
      break;
    case 7:
      return 8;
      break;
    case 8:
      return 9;
      break;
  }
}
*/

//Second Version.

function getCoupeNumber(seatNumber) {
    if (!Number.isInteger(seatNumber) || seatNumber <= 0 || seatNumber > 36) {
        if (seatNumber > 36 || seatNumber <= 0) {
            return 'Таких мест в вагоне не существует';
        } else {
            return 'Ошибка. Проверьте правильность введенного номера места';
        }
    }

    return Math.ceil(seatNumber / 4);
}

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(calculateVolumeAndArea(5)).toEqual(jasmine.any(String));
    });
    it('вызов функции с верным аргументом дает неправильный результат', function () {
        expect(calculateVolumeAndArea(5)).toEqual(
            'Объем куба: 125, площадь всей поверхности: 150'
        );
    });
    it('вызов функции с дробным аргументом дает неправильный результат', function () {
        expect(calculateVolumeAndArea(5.5)).toEqual(
            'При вычислении произошла ошибка'
        );
    });
    it('вызов функции с не числовым аргументом дает неправильный результат', function () {
        expect(calculateVolumeAndArea('5.5')).toEqual(
            'При вычислении произошла ошибка'
        );
    });
    it('вызов функции с отрицательным аргументом дает неправильный результат', function () {
        expect(calculateVolumeAndArea(-5)).toEqual(
            'При вычислении произошла ошибка'
        );
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('вызов функции с 0 или значением, больше, чем 36, дает неправильный результат', function () {
        expect(getCoupeNumber(37)).toEqual('Таких мест в вагоне не существует');
        expect(getCoupeNumber(0)).toEqual('Таких мест в вагоне не существует');
    });
    it('вызов функции с верным аргументом дает неправильный результат', function () {
        expect(getCoupeNumber(5)).toEqual(2);
        expect(getCoupeNumber(33)).toEqual(9);
    });
    it('вызов функции с дробным аргументом дает неправильный результат', function () {
        expect(getCoupeNumber(5.5)).toEqual(
            'Ошибка. Проверьте правильность введенного номера места'
        );
    });
    it('вызов функции с не числовым аргументом дает неправильный результат', function () {
        expect(getCoupeNumber('5.5')).toEqual(
            'Ошибка. Проверьте правильность введенного номера места'
        );
    });
    it('вызов функции с отрицательным аргументом дает неправильный результат', function () {
        expect(getCoupeNumber(-5)).toEqual(
            'Ошибка. Проверьте правильность введенного номера места'
        );
    });
});
