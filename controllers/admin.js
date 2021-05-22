const Product = require("../models/product");

const fetchAllProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error during fetching all products.",
      });
    });
};

module.exports = {
  fetchAllProducts,
};
