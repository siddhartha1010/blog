// const express = require("express");
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import articleRouter from "./routes/article.js";
// const articleRouter = require("./routes/article");
dotenv.config({ path: "./config.env" });
const app = express();
const port = 4000;
const __dirname = path.resolve();

app.use(express.json());

const DB = `${process.env.MONGODB_URI}`;

mongoose
  .connect(DB, {})
  .then(() => console.log("DB connection succesful!"))
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "pug"); //When you set the view engine using app.set("view engine", "ejs"), Express knows to use EJS for rendering views.
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("./public"));
app.use(cookieParser());
app.use("/", articleRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
