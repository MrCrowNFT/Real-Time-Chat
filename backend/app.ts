import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});