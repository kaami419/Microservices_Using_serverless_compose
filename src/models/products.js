module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;

  const Product = sequelize.define(
    "products",
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
      description: {
        type: DataTypes.STRING(100),
        allowNull: false,
        min: 1,
        max: 100,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "products",
    }
  );
  Product.sync({ force: true });

  return Product;
};
