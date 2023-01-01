const { products } = require("../data/products");

const productResolver = (_parent, { id }) =>
  products.find((product) => product.id === id);

module.exports = { productResolver };
