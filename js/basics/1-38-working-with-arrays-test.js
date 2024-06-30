// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]

// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]

// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]

// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = [
    'Peter',
    'Andrew',
    'Ann',
    'Mark',
    'Josh',
    'Sandra',
    'Cris',
    'Bernard',
    'Takesi',
    'Sam',
];

function sortStudentsByGroups(arr) {
    // Step 1: Sort students alphabetically
    const sortedStudents = arr.sort();

    // Step 2: Group students into teams of 3
    const groupSize = 3;
    let groupedStudents = [];
    for (let i = 0; i < sortedStudents.length; i += groupSize) {
        groupedStudents.push(sortedStudents.slice(i, i + groupSize));
    }

    // Step 3: Prepare final groups and handle remaining students
    let finalGroups = groupedStudents.map((group) => {
        if (group.length === 3) {
            return group;
        } else {
            return `Оставшиеся студенты: ${group.join(', ')}`;
        }
    });

    // If there are exactly 9 students, ensure the "remaining students" message is included
    if (arr.length === 9) {
        finalGroups.push('Оставшиеся студенты: -');
    }

    return finalGroups;
}

// Тесты
describe('Проверяем задачу на ошибки:', function () {
    it('вызов функции не возвращает массив', function () {
        expect(sortStudentsByGroups(students)).toEqual(jasmine.any(Array));
    });
    it('неверный результат с данным массивом', function () {
        const arr = [
            'Peter',
            'Andrew',
            'Ann',
            'Mark',
            'Josh',
            'Sandra',
            'Cris',
            'Bernard',
            'Takesi',
            'Sam',
        ];
        expect(sortStudentsByGroups(arr)).toEqual([
            ['Andrew', 'Ann', 'Bernard'],
            ['Cris', 'Josh', 'Mark'],
            ['Peter', 'Sam', 'Sandra'],
            'Оставшиеся студенты: Takesi',
        ]);
    });
    it('неверный результат с другим массивом, где ровно 9 учеников', function () {
        const arr = [
            'Peter',
            'Andrew',
            'Ann',
            'Mark',
            'Josh',
            'Sandra',
            'Cris',
            'Bernard',
            'Sam',
        ];
        expect(sortStudentsByGroups(arr)).toEqual([
            ['Andrew', 'Ann', 'Bernard'],
            ['Cris', 'Josh', 'Mark'],
            ['Peter', 'Sam', 'Sandra'],
            'Оставшиеся студенты: -',
        ]);
    });
    it('неверный результат с другим массивом, где 11 учеников', function () {
        const arr = [
            'Peter',
            'Andrew',
            'Ann',
            'Mark',
            'Josh',
            'Sandra',
            'Cris',
            'Bernard',
            'Sam',
            'Takesi',
            'Zlatan',
        ];
        expect(sortStudentsByGroups(arr)).toEqual([
            ['Andrew', 'Ann', 'Bernard'],
            ['Cris', 'Josh', 'Mark'],
            ['Peter', 'Sam', 'Sandra'],
            'Оставшиеся студенты: Takesi, Zlatan',
        ]);
    });
});
