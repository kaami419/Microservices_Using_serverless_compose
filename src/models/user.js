module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;

  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        min: 1,
        max: 100,
      },
      userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        min: 1,
        max: 100,
      },
      phoneNumber: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: {
          args: true,
          msg: "contact already in use!",
        },
        min: 7,
        max: 17,
      },
      password: {
        type: DataTypes.STRING(300),
        allowNull: false,
        min: 1,
        max: 100,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      underscored: true,
      timestamps: true,
      freezeTableName: true,
      // define the table's name
      tableName: "users",
    }
  );

  User.sync({ force: true });

  return User;
};
