import { Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import createUserModel from "../model/userModel.js";
import createPriceListModel from "../model/priceListModel.js";
import createTranslationModel from "../model/translationModel.js";
import { seedPriceListForUser, seedTranslationsSafe } from "./init.js";

let sequelize;
let User;
let PriceList;
let Translation;

const MANUAL_USERS = [{ username: "bob@gmail.com", password: "bob123" }];

export const dbConnection = async () => {
  try {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: false,
    });

    await sequelize.authenticate();
    console.log("DB connected");

    User = createUserModel(sequelize);
    PriceList = createPriceListModel(sequelize);
    Translation = createTranslationModel(sequelize);

    User.hasMany(PriceList, { foreignKey: "userId" });
    PriceList.belongsTo(User, { foreignKey: "userId" });

    await sequelize.sync();


    for (const u of MANUAL_USERS) {
      let user = await User.findOne({ where: { username: u.username } });

      if (!user) {
        user = await User.create({
          username: u.username,
          password: await bcrypt.hash(u.password, 10),
        });
        console.log(`User ${u.username} created`);
      }
    }

    const bob = await User.findOne({
      where: { username: "bob@gmail.com" },
    });

    await seedPriceListForUser(PriceList, bob.id);
    await seedTranslationsSafe(Translation);

    console.log("DB connected & manual users initialized");
  } catch (err) {
    console.error("DB error:", err);
    process.exit(1);
  }
};

export { sequelize, User, PriceList, Translation };
