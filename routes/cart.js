const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");

router.get("/fetch", cartController.fetchCart);
router.post("/add", cartController.addCart);

module.exports = router;
