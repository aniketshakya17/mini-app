import { Translation } from "../db/dbconnection.js";

export const getTranslations = async (req, res) => {
  try {
    const lang = req.query.lang || "en";

    const rows = await Translation.findAll({
      where: { lang },
      attributes: ["key", "value"], 
    });

    const translations = {};
    for (const row of rows) {
      translations[row.key] = row.value;
    }

    res.json(translations);
  } catch (err) {
    console.error("Translation load error:", err);
    res.status(500).json({ message: "Failed to load translations" });
  }
};
