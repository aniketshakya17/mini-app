import { DataTypes } from "sequelize";

const createUserModel = (sequelize) => {
  return sequelize.define(
    "users",                 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,  
      timestamps: false,
    }
  );
};

export default createUserModel;
