const { currencyConverter } = require("../../utils/currency-converter");

const roundToTwoDecimals = (num) =>
  Number((Math.round(num * 100) / 100).toFixed(2));

const setPrice = (amountEUR) => {
  return currencyConverter.availableCurrencies.map((currency) => ({
    currency,
    amount: roundToTwoDecimals(
      currencyConverter.convertFromEUR(amountEUR, currency.label)
    ),
  }));
};

module.exports = { setPrice };
