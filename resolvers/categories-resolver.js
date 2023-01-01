const { products } = require("../data/products");
const { categories } = require("../data/categories");


const productsByCategory = (category, products) =>
    products.filter((product) => product.category === category);

const categoriesResolver = () => {

  const results = Object.values(categories).map((category) => {
    if (category === categories.all) {
      return {
        name: category,
        products,
      };
    }
    return {
      name: category,
      products: productsByCategory(category, products),
    };
  });

  return results;
};

module.exports = { categoriesResolver, productsByCategory };
