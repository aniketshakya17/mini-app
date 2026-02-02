import { DataTypes } from "sequelize";

const createPriceListModel = (sequelize) => {
  return sequelize.define(
    "pricelists",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      articleNo: {
        type: DataTypes.STRING,
        defaultValue: "",
      },

      productService: {
        type: DataTypes.STRING,
        defaultValue: "",
      },

      inPrice: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },

      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },

      unit: {
        type: DataTypes.STRING,
        defaultValue: "pcs",
      },

      inStock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      description: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};

export default createPriceListModel;
