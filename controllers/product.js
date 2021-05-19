const Product = require("../models/product");

const fetchAllProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([products, fieldsData]) => {
      res.json({
        products,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err: err.message,
      });
    });
};

const addProduct = (req, res, next) => {
  new Product(
    null,
    req.body.title,
    req.body.price,
    req.body.description,
    req.body.imageUrl
  )
    .save()
    .then(() => res.json({ message: "Product added successfully" }))
    .catch((err) => {
      res.status(500).json({
        err: err.message,
      });
    });
};

module.exports = {
  fetchAllProducts,
  addProduct,
};
