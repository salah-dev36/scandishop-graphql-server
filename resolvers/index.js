const { currencyresolver } = require("./currency-resolver");
const { categoriesResolver } = require("./categories-resolver");
const { categoryResolver } = require("./category-resolver");
const {productResolver} = require("./product-resolver")

const resolvers = {
  Query: {
    currencies: currencyresolver,
    categories: categoriesResolver,
    category: categoryResolver,
    product: productResolver
  },
};

module.exports = { resolvers };
