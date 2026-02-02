import express from "express";
import cors from "cors";
import { dbConnection } from "./db/dbconnection.js";
import router from "./route/routes.js";

const app = express();

app.use(cors());            
app.use(express.json());    

app.use("/api", router);

await dbConnection("Test", "postgres", "12345");

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
