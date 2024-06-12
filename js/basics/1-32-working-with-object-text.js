'use strict';

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month',
    },

    //First version
    showAgeAndLangs: function (object) {
        let languages = object.skills.languages
            .map((lang) => lang.toUpperCase())
            .join(' ');
        return `Мне ${object.age} и я владею языками: ${languages}`;
    },
    //Second version
    showAgeAndLangs2(obj) {
        const {
            age,
            skills: { languages },
        } = obj;
        const languagesUpperCase = languages
            .map((lang) => lang.toUpperCase())
            .join(' ');
        return `Мне ${age} и я владею языками: ${languagesUpperCase}`;
    },
};

function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let result = '';

    for (let language in plan.skills.programmingLangs) {
        result += `Язык ${language} изучен на ${plan.skills.programmingLangs[language]}\n`;
    }
    return result;
}

// Тесты
const personalPlanIvan = {
    name: 'Ivan',
    age: '30',
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%',
        },
        exp: '3 month',
    },
};
describe('Проверяем первую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(showExperience(personalPlanIvan)).toEqual(jasmine.any(String));
    });
    it('неверный результат в строке', function () {
        expect(showExperience(personalPlanIvan)).toEqual('3 month');
    });
});

describe('Проверяем вторую задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(showProgrammingLangs(personalPlanIvan)).toEqual(
            jasmine.any(String)
        );
    });
    it('неверный результат в строке', function () {
        expect(showProgrammingLangs(personalPlanIvan)).toEqual(
            'Язык js изучен на 20%\nЯзык php изучен на 10%\nЯзык ruby изучен на 30%\n'
        );
    });
});

describe('Проверяем третью задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(personalPlanPeter.showAgeAndLangs(personalPlanIvan)).toEqual(
            jasmine.any(String)
        );
    });
    it('неверный результат в строке', function () {
        expect(
            personalPlanPeter.showAgeAndLangs(personalPlanIvan).trim()
        ).toEqual('Мне 30 и я владею языками: RU UA');
    });
});
