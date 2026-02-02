import { Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import createUserModel from "../model/userModel.js";
import createPriceListModel from "../model/priceListModel.js";

let sequelize;
let User;
let PriceList;

const MANUAL_USERS = [
  {
    username: "john@gmail.com",
    password: "john123",
  },
  {
    username: "emma@gmail.com",
    password: "emma123",
  },
  {
    username: "bob@gmail.com",
    password: "bob123",
  },
];

export const dbConnection = async (database, username, password) => {
  sequelize = new Sequelize(database, username, password, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });
  console.log("Connected to DB:", database);

  try {
    await sequelize.authenticate();

    User = createUserModel(sequelize);
    PriceList = createPriceListModel(sequelize);

    User.hasMany(PriceList, { foreignKey: "userId" });
    PriceList.belongsTo(User, { foreignKey: "userId" });

    await sequelize.sync({ alter: true });

    for (const u of MANUAL_USERS) {
      let user = await User.findOne({
        where: { username: u.username },
      });

      if (!user) {
        user = await User.create({
          username: u.username,
          password: await bcrypt.hash(u.password, 10),
        });
        console.log(`User ${u.username} created`);
      }
    }

    console.log("DB connected & manual users initialized");
  } catch (error) {
    console.error("DB error:", error);
  }
};

export { sequelize, User, PriceList };
