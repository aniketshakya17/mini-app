import express from "express";
import { getTranslations } from "../controller/translationController.js";

const router = express.Router();

router.get("/", getTranslations);

export default router;
