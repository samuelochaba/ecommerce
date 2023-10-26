const Repository = require("./repository");

class ProductsRepository extends Repository {
  constructor(filename) {
    super(filename);
  }
}

module.exports = new ProductsRepository("products.json");
