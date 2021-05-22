const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Cart;
