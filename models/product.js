// const db = require("../utils/database");
// module.exports = class Product {
//   constructor(id, title, price, description, imageUrl) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO Products(title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute("SELECT * FROM Products");
//   }

//   static findById(id) {}
// };

const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const commonProperties = {
  type: Sequelize.STRING,
  allowNull: false,
};

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: { ...commonProperties },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: { ...commonProperties },
  imageUrl: { ...commonProperties },
});

module.exports = Product;
