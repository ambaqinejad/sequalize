const express = require("express");
const productRouter = require("./routes/product");
const db = require("./utils/database");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;

app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// db.execute("SELECT * FROM Products;")
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
