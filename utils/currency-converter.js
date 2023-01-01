const rates = {
  USD: 1.07028,
  EUR: 1,
  GBP: 0.88514,
  CAD: 1.45049,
  CHF: 0.98995,
  AUD: 1.57024,
  JPY: 140.362,
  RUB: 79.1199,
};

const symbols = ["$", "€", "£", "CA$", "₣", "A$", "¥", "₽"];

const currencyConverter = {
  availableCurrencies: Object.keys(rates).map((label, i) => ({
    label,
    symbol: symbols[i],
  })),

  convertFromEUR(amount, targetCurrency) {
    return rates[targetCurrency] * amount;
  },
};

module.exports = { currencyConverter };
