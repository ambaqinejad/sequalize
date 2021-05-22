const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/fetchAll", productController.fetchAllProducts);
router.get("/fetchById/:productId", productController.fetchProductById);
router.post("/add", productController.addProduct);
router.put("/update/:productId", productController.updateProduct);
router.delete("/delete/:productId", productController.deleteProduct);

module.exports = router;
