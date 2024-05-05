import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";

import { app } from "./app.js";

const DB = `${process.env.MONGODB_URI}`;

mongoose.connect(DB, {}).then(() => {
  console.log("DB CONNECTION SUCESSFUL");
  const currentDateTime = new Date().toLocaleString();
  console.log(currentDateTime);
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App is running in the port no:${port}`);
});
