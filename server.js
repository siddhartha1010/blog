import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";

import { app } from "./app.js";
//!Catching uncaught exceptions like console.log(x) but x is not defined
process.on("uncaughtException", (err) => {
  console.log("Uncaught execption shuutting down....");
  console.log(err.name, err.message);
  process.exit(1);
});

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

//!Handling uncaught erroer like db not connected and all DB DOWN FOR SOME REASON
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION Shutting Down");
  server.close(() => {
    //!SERVER.CLOSE LE ABBORTLY DIRECTLY CLOSE GARDAINA BISTARI GARXA.GOOD PRATICE TO USE
    process.exit(1);
  });
});
