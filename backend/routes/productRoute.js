const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
// router.route("/products").get(getAllProducts);
router.post("/product/new", createProduct);
router.get("/product", getAllProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
module.exports = router;
