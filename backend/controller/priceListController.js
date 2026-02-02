import { PriceList } from "../db/dbconnection.js";

export const getPrices = async (req, res) => {
  const data = await PriceList.findAll();
  res.json(data);
};

export const createPrice = async (req, res) => {
  const item = await PriceList.create(req.body);
  res.json(item);
};

export const updatePrice = async (req, res) => {
  const { id } = req.params;

  await PriceList.update(req.body, { where: { id } });
  const updated = await PriceList.findByPk(id);
  res.json(updated);
};
