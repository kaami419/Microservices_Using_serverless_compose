const { sequelize, Sequelize } = require("../database");
const User = require("./user");
const Product = require("./products");

// initializing model

const UserModel = User(sequelize, Sequelize);
const ProductModel = Product(sequelize, Sequelize);

//  associations

// export
module.exports = {
  UserModel,
  ProductModel,
};
