// routes/admin/allUsers.js

const { RouteHandler } = require("../../utils/route_handler");
const { createProduct } = require("../../services/products/product.service");

const createProductHandler = RouteHandler(async (event) => {
  const productData = JSON.parse(event.body);
  return await createProduct(productData);
}, {});

module.exports = {
  createProductHandler,
};
