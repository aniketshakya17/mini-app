import { Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import createUserModel from "../model/userModel.js";
import createPriceListModel from "../model/priceListModel.js";

let sequelize;
let User;
let PriceList;

const MANUAL_USERS = [
  {
    username: "john",
    password: "john123",
  },
  {
    username: "emma",
    password: "emma123",
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

    await sequelize.sync();

    for (const u of MANUAL_USERS) {
      const [user, created] = await User.findOrCreate({
        where: { username: u.username },
        defaults: {
          password: await bcrypt.hash(u.password, 10),
        },
      });

      if (created) {
        console.log(`User ${u.username} created`);
      }
    }

    console.log("DB connected & manual users initialized");
  } catch (error) {
    console.error("DB error:", error);
  }
};

export { sequelize, User, PriceList };
