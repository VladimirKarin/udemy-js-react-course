// 1) Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.
// 2) Создайте объект под названием storeDescription
// 3) Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
// 4) Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор
// 5) Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.
// 6) Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым

// Ваше решение:
const storeName = "Karin's";
const storeDescription = {
    budget: 10000,
    employees: ['Best employee', 'Lazy employee', 'The coolest employee'],
    products: {
        'Awesome product': 9.99,
        'Ordinary product': 19.99,
    },
    open: true,
};

// Тесты:
describe('Проверяем типы данных на ошибки:', function () {
    it('название магазина storeName не содержит строку', function () {
        expect(storeName).toEqual(jasmine.any(String));
    });

    it('описание магазина - это не объект', function () {
        expect(storeDescription).toEqual(jasmine.any(Object));
    });

    it('бюджет не находится в описании магазина или не равен 10000', function () {
        expect(storeDescription.budget).toEqual(10000);
    });

    const strings = storeDescription.employees.every(
        (elem) => typeof elem === 'string'
    );

    it('сотрудники в магазине не записаны в виде строк', function () {
        expect(storeDescription.employees).toEqual(jasmine.any(Array));
        expect(strings).toBe(true);
    });

    it('сотрудников в магазине не трое', function () {
        expect(storeDescription.employees).toEqual(jasmine.any(Array));
        expect(storeDescription.employees.length).toEqual(3);
    });

    it('товары не записаны в виде объекта', function () {
        expect(storeDescription.products).toEqual(jasmine.any(Object));
    });

    const products = Object.keys(storeDescription.products).length;

    it('в магазине не два товара', function () {
        expect(products).toEqual(2);
    });

    it('магазин не открыт', function () {
        expect(storeDescription.open).toEqual(true);
    });
});
