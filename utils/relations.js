const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const CartItem = require("../models/cart-item");

Product.belongsTo(User, {
  constraints: true,
  onDelete: "CASCADE",
});
User.hasMany(Product);

Cart.belongsTo(User, {
  constraints: true,
  onDelete: "CASCADE",
});
User.hasOne(Cart);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
