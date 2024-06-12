// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то возвращается сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (!arr.length) {
        return 'Семья пуста';
    }
    const familyMembers = [...arr].join(' ');
    return `Семья состоит из: ${familyMembers}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const cities = arr.map((element) => element.toLowerCase());
    cities.forEach((city) => console.log(city));
}

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(showFamily(family)).toEqual(jasmine.any(String));
    });
    it('неверный результат в строке', function () {
        expect(showFamily(family).trim()).toEqual(
            'Семья состоит из: Peter Ann Alex Linda'
        );
    });
    it('неверный результат при пустом массиве', function () {
        expect(showFamily([])).toEqual('Семья пуста');
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('в консоли неправильный вывод данных', function () {
        let stdout = '';

        spyOn(console, 'log').and.callFake(function () {
            stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
        });
        standardizeStrings(favoriteCities);

        expect(stdout).toEqual('lisbon\nrome\nmilan\ndublin\n');
    });
    it('в консоли неправильный вывод данных', function () {
        let stdout = '';

        spyOn(console, 'log').and.callFake(function () {
            stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
        });
        const arr = ['Aar', 'aaR'];
        standardizeStrings(arr);

        expect(stdout).toEqual('aar\naar\n');
    });
});
