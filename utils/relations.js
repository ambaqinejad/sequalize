const User = require("../models/user");
const Product = require("../models/product");

Product.belongsTo(User, {
  constraints: true,
  onDelete: "CASCADE",
});

User.hasMany(Product);
