import { Router } from "express";
import { loginController } from "../controller/userController.js";
import { authenticateToken } from "../controller/auth/auth.js";
import {
  getPrices,
  createPrice,
  updatePrice,
} from "../controller/priceListController.js";

const router = Router();


router.post("/login", loginController);


router.get("/pricelist", authenticateToken, getPrices);
router.post("/pricelist", authenticateToken, createPrice);
router.put("/pricelist/:id", authenticateToken, updatePrice);

export default router;
