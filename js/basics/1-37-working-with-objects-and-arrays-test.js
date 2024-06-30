// Написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5,
        },
        {
            width: 15,
            length: 7,
        },
        {
            width: 20,
            length: 5,
        },
        {
            width: 8,
            length: 10,
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
};

function isBudgetEnough(data) {
    const totalArea = data.shops.reduce((total, shop) => {
        return total + shop.width * shop.length;
    }, 0);

    const totalVolume = totalArea * data.height;
    const totalCost = totalVolume * data.moneyPer1m3;

    return totalCost <= data.budget
        ? 'Бюджета достаточно'
        : 'Бюджета недостаточно';
}

// Тесты
describe('Проверяем задачу на ошибки:', function () {
    it('вызов функции не возвращает строку', function () {
        expect(isBudgetEnough(shoppingMallData)).toEqual(jasmine.any(String));
    });
    it('неверный результат с данным объектом', function () {
        expect(isBudgetEnough(shoppingMallData)).toEqual(
            'Бюджета недостаточно'
        );
    });
    it('неверный результат с другим объектом', function () {
        const shopData = {
            shops: [
                {
                    width: 10,
                    length: 5,
                },
                {
                    width: 15,
                    length: 7,
                },
                {
                    width: 20,
                    length: 5,
                },
                {
                    width: 8,
                    length: 5,
                },
            ],
            height: 5,
            moneyPer1m3: 30,
            budget: 50000,
        };

        expect(isBudgetEnough(shopData)).toEqual('Бюджета достаточно');
    });
});
