// routes/admin/allUsers.js

const { RouteHandler } = require("../../utils/route_handler");
const { createUser } = require("../../services/user/user.service");

const createUserHandler = RouteHandler(async (event) => {
  const userData = JSON.parse(event.body);
  return await createUser(userData);
}, {});

module.exports = {
  createUserHandler,
};
