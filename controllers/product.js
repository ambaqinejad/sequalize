const Product = require("../models/product");

// const fetchAllProducts = (req, res, next) => {
//   Product.fetchAll()
//     .then(([products, fieldsData]) => {
//       res.json({
//         products,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         err: err.message,
//       });
//     });
// };

// const addProduct = (req, res, next) => {
//   new Product(
//     null,
//     req.body.title,
//     req.body.price,
//     req.body.description,
//     req.body.imageUrl
//   )
//     .save()
//     .then(() => res.json({ message: "Product added successfully" }))
//     .catch((err) => {
//       res.status(500).json({
//         err: err.message,
//       });
//     });
// };

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

fetchProductById = (req, res, next) => {
  const productId = req.params.productId;
  // Product.findOne({
  //   where: {
  //     id: productId,
  //   },
  // })
  //   .then((product) => {
  //     res.json(product);
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       message: "Error during fetching all products.",
  //     });
  //   });
  // ---------------------------------------------
  // Product.findByPk(productId)
  //   .then((product) => {
  //     res.json(product);
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       message: "Error during fetching all products.",
  //     });
  // });
  // ----------------------------------------------
  Product.findAll({
    where: {
      id: productId,
    },
  })
    .then((products) => {
      res.json(products[0]);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error during fetching all products.",
      });
    });
};

const addProduct = (req, res, next) => {
  if (req.user) {
    req.user
      .createProduct(req.body)
      .then(() => {
        res.json({
          message: "New product created successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error during saving new product.",
        });
      });
  } else {
    res.json({
      message: "Can not access to user.",
    });
  }
};

const updateProduct = (req, res, next) => {
  const productId = req.params.productId;
  // Product.findByPk(productId)
  //   .then((product) => {
  req.user
    .getProducts({
      where: {
        id: productId,
      },
    })
    .then((products) => {
      const product = products[0];
      if (product) {
        product.title = req.body.title || product.title;
        product.price = req.body.price || product.price;
        product.description = req.body.description || product.description;
        product.imageUrl = req.body.imageUrl || product.imageUrl;
        return product.save();
      } else {
        res.json({
          message: `There is not any product with id ${productId}`,
        });
      }
    })
    .then(() => {
      res.json({
        message: `Product updated successfully.`,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Error during updating product.",
      });
    });
};

const deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId)
    .then((product) => {
      if (product) {
        return product.destroy();
      } else {
        res.json({
          message: `There is not any product with id ${productId}`,
        });
      }
    })
    .then(() => {
      res.json({
        message: `Product deleted successfully.`,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Error during deleting product.",
      });
    });
};

module.exports = {
  fetchAllProducts,
  fetchProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
