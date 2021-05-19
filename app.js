const db = require("./utils/database");

db.execute("SELECT * FROM Products;")
  .then((products) => {
    console.log(products);
  })
  .catch((err) => {
    console.error(err);
  });
