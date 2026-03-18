const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

// middleware for the /add-products route
router.get("/add-product", (req, res, next) => {
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title' placeholder='Product Name'><button type='submit'>Add Product</button></form>",
  // );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// app.use('/products', (req, res, next) => {
// replace use with get to handle only GET requests to /products
// if we use app.use, it will handle all HTTP methods (GET, POST, etc.) for the /products route
router.post("/add-product", (req, res, next) => {
  console.log("req.body:", req.body); // This will be undefined without body-parser middleware
  res.redirect("/");
});

module.exports = router;
