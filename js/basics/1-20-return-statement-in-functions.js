'use strict';
const usdCurrency = 28;
const eurCurrency = 56;
const discount = 0.5;

function convert(amount, currency) {
    return currency * amount;
}

convert(50, usdCurrency);
convert(300, eurCurrency);

function promotion(result) {
    console.log(result * discount);
}

const usdConverterResult = convert(50, usdCurrency);
const eurConverterResult = convert(300, eurCurrency);

promotion(usdConverterResult);
promotion(eurConverterResult);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);

        if (i === 3) {
            return;
        }
    }
    console.log('I think that it is done!');
}

test();

function doNothing() {}

console.log(doNothing() === undefined);

//If function has no 'return' it will awlays return undefined.
// Never make a linebreak (page break) after the return statement, everythin that was after the return becomes unreachable.
