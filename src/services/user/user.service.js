// services/user/user.service.js

const { UserModel } = require("../../models/index");

const createUser = async (userData) => {
  return await UserModel.create(userData);
};

const updateUser = async (userId, userData) => {
  const [updatedRows] = await UserModel.update(userData, {
    where: { id: userId },
  });

  if (updatedRows === 0) {
    throw new Error("User not found");
  }

  return await UserModel.findOne({
    where: {
      id: userId,
    },
  });
};

const deleteUser = async (userId) => {
  const deletedUser = await UserModel.findOne({
    where: {
      id: userId,
    },
  });

  if (!deletedUser) {
    throw new Error("User not found");
  }

  await UserModel.destroy({
    where: { id: userId },
  });

  return deletedUser;
};

const getUserById = async (userId) => {
  const user = await UserModel.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const getAllUsers = async () => {
  return await UserModel.findAll({
    where: { deleted: false },
    attributes: ["id", "name", "userName", "email"],
    order: [["id", "DESC"]],
  });
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
};
