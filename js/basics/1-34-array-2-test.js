// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';

// reverse(someString) => 'gnirts egnarts emos si sihT'

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')

// Вернет строку:

// Доступные валюты:
// UAH
// RUB

// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const someString = 'This is some strange string';

//First Version

function reverse(str) {
    if (typeof str !== 'string') {
        console.log('Ошибка!');
        return 'Ошибка!';
    } else {
        return str.split('').reverse().join('');
    }
}

//Second Version

function reverse2(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverse2(someString)); // 'gnirts egnarts emos si sihT'

//First Version

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }

    let currencies = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        currencies += `${arr[i]}\n`;
    }
    return `Доступные валюты:\n${currencies}`;
}
// Example call to function
console.log(availableCurr(allCurrencies, 'CNY'));

//Second Version

const baseCurrencies2 = ['USD', 'EUR'];
const additionalCurrencies2 = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }

    let availableCurrencies = arr.filter(
        (currency) => currency !== missingCurr
    );

    if (availableCurrencies.length === 0) {
        return 'Нет доступных валют';
    }

    let currenciesStr = availableCurrencies.join('\n');

    return `Доступные валюты:\n${currenciesStr}\n`;
}

const allCurrencies2 = [...baseCurrencies2, ...additionalCurrencies2];
console.log(availableCurr(allCurrencies2, 'CNY')); // Доступные валюты: UAH RUB

// Тесты
describe('Проверяем первую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(reverse(someString)).toEqual(jasmine.any(String));
    });
    it('неверный результат в данной строке', function () {
        expect(reverse(someString)).toEqual('gnirts egnarts emos si sihT');
    });
    it('неверный результат в строке', function () {
        const str = 'abc';
        expect(reverse(str)).toEqual('cba');
    });
    it('неверный результат, когда приходит не строка в функцию', function () {
        expect(reverse(5)).toEqual('Ошибка!');
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(
            availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
        ).toEqual(jasmine.any(String));
    });
    it('неверный результат при доступных данных', function () {
        expect(
            availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
        ).toEqual('Доступные валюты:\nUSD\nEUR\nUAH\nRUB\n');
    });
    it('неверный результат при доступных данных', function () {
        expect(
            availableCurr([...baseCurrencies, ...additionalCurrencies])
        ).toEqual('Доступные валюты:\nUSD\nEUR\nUAH\nRUB\nCNY\n');
    });
    it('неверный результат при пустом массиве', function () {
        expect(availableCurr([])).toEqual('Нет доступных валют');
    });
});
