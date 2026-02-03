import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbconnection.js";
import router from "./route/routes.js";
import translationRoute from "./route/translationRoute.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use("/api", router);
app.use("/api/translations", translationRoute);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
);

await dbConnection();

const PORT = process.env.PORT || 8081;
app.listen(PORT);
