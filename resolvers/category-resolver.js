const {products} = require("../data/products")
const {categories} =require("../data/categories")
const {productsByCategory} = require("./categories-resolver")

const categoryResolver = (_parent, args) => {
     const {input : {title}} = args

     const result = () => {
        if(!title || title === categories.all) {
            return products
        } else {
            return productsByCategory(title, products)
        }
     }
     return {
        name: title ? title : categories.all,
        products: result
     }
}

module.exports = {categoryResolver}