const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/fetchAllProducts", adminController.fetchAllProducts);

module.exports = router;
