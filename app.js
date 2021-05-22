const express = require("express");
const productRouter = require("./routes/product");
const adminRouter = require("./routes/admin");
// const db = require("./utils/database");
const relations = require("./utils/relations");
const User = require("./models/user");
const sequelize = require("./utils/database");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;

// middleware for accessing user throughout the application
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/product", productRouter);
app.use("/admin", adminRouter);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "Amir Hosein",
        email: "ambaqinejad@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// db.execute("SELECT * FROM Products;")
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
