const { ProductModel } = require("../../models/index");

const createProduct = async (productData) => {
  return await ProductModel.create(productData);
};

const updateProduct = async (productId, productData) => {
  const [updatedRows] = await ProductModel.update(productData, {
    where: { id: productId },
  });

  if (updatedRows === 0) {
    throw new Error("Product not found");
  }

  return await ProductModel.findOne({
    where: {
      id: productId,
    },
  });
};

const deleteProduct = async (productId) => {
  const deletedProduct = await ProductModel.findOne({
    where: {
      id: productId,
    },
  });

  if (!deletedProduct) {
    throw new Error("Product not found");
  }

  await ProductModel.destroy({
    where: { id: productId },
  });

  return deletedProduct;
};

const getProductById = async (productId) => {
  const product = await ProductModel.findOne({
    where: {
      id: productId,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const getAllProducts = async () => {
  return await ProductModel.findAll({
    where: { deleted: false },
    attributes: ["id", "name", "description", "price", "userId", "enable"],
    order: [["id", "DESC"]],
  });
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};
