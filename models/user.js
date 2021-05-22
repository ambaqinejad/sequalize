const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Product = require("./product");

const commonProperties = {
  type: Sequelize.STRING,
  allowNull: false,
};
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    ...commonProperties,
  },
  email: {
    ...commonProperties,
  },
});

// Product.belongsTo(User, {
//   constraints: true,
//   onDelete: "CASCADE",
// });

// User.hasMany(Product);

module.exports = User;
