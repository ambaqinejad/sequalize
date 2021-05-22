const fetchCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts();
    })
    .then((products) => {
      return res.json(products);
    })
    .catch((err) => console.log(err));
};

const addCart = (req, res, next) => {
  req.user
    .createCart()
    .then(() => {
      console.log("Cart created.");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  fetchCart,
  addCart,
};
