import { DataTypes } from "sequelize";

const createPriceListModel = (sequelize) => {
  return sequelize.define(
    "pricelists",            
    {
      articleNo: DataTypes.STRING,
      productService: DataTypes.STRING,
      inPrice: DataTypes.FLOAT,
      price: DataTypes.FLOAT,
      unit: DataTypes.STRING,
      inStock: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};

export default createPriceListModel;
