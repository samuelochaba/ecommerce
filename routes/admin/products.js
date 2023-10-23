const express = require("express");
const productsNewTemplate = require("../../views/admin/products/new");

const router = express.Router();

router.get("/admin/products", (req, res) => {
  res.send("hey");
});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
});

module.exports = router;
