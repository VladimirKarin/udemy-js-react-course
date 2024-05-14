'use strict';
const usdCurrency = 28;
const eurCurrency = 56;

function convert(amount, currency) {
    console.log(currency * amount);
}

convert(50, usdCurrency);
convert(300, eurCurrency);
