import { PriceList } from "../db/dbconnection.js";

const normalize = (value, fallback) => {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }
  return value;
};

const toNumber = (value, fallback) => {
  const num = Number(value);
  return Number.isNaN(num) ? fallback : num;
};

const DEFAULT_PRICE = {
  articleNo: "",
  productService: "",
  inPrice: 0,
  price: 0,
  unit: "pcs",
  inStock: 0,
  description: "",
};


export const getPrices = async (req, res) => {
  try {
    const data = await PriceList.findAll({
      where: { userId: req.user.userId },
    });
    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch prices" });
  }
};

export const createPrice = async (req, res) => {
  try {
    const payload = {
      userId: req.user.userId,

      articleNo: normalize(req.body.articleNo, DEFAULT_PRICE.articleNo),
      productService: normalize(req.body.productService, DEFAULT_PRICE.productService),

      inPrice: toNumber(req.body.inPrice, DEFAULT_PRICE.inPrice),
      price: toNumber(req.body.price, DEFAULT_PRICE.price),

      unit: normalize(req.body.unit, DEFAULT_PRICE.unit),
      inStock: toNumber(req.body.inStock, DEFAULT_PRICE.inStock),

      description: normalize(req.body.description, DEFAULT_PRICE.description),
    };

    const item = await PriceList.create(payload);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to create price" });
  }
};

export const updatePrice = async (req, res) => {
  try {
    const { id } = req.params;

    const price = await PriceList.findOne({
      where: { id, userId: req.user.userId },
    });

    if (!price) {
      return res.status(404).json({ message: "Price not found" });
    }

    const payload = {
      articleNo: normalize(req.body.articleNo, price.articleNo),
      productService: normalize(req.body.productService, price.productService),

      inPrice: toNumber(req.body.inPrice, price.inPrice),
      price: toNumber(req.body.price, price.price),

      unit: normalize(req.body.unit, price.unit),
      inStock: toNumber(req.body.inStock, price.inStock),

      description: normalize(req.body.description, price.description),
    };

    await price.update(payload);
    res.json(price);
  } catch (error) {
    res.status(500).json({ message: "Failed to update price" });
  }
};

