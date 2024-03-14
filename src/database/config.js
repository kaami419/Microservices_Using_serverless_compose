const config = {
  host: "127.0.0.1" || "",
  database: "multi_service_db" || "",
  username: "root" || "",
  password: "Password_123" || "",
};

module.exports = {
  ...config,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    mind: 0,
    acquire: 30000,
    idle: 10000,
  },
};
