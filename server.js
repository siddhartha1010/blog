// const express = require("express");
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import articleRouter from "./routes/article.js";
// const articleRouter = require("./routes/article");
dotenv.config({ path: "./config.env" });
const app = express();
const port = 3000;
const DB = `${process.env.MONGODB_URI}`;

mongoose.connect(DB, {}).then(() => console.log("DB connection succesful!"));

app.set("view engine", "ejs"); //When you set the view engine using app.set("view engine", "ejs"), Express knows to use EJS for rendering views.

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test articles",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test articles 2",
      createdAt: new Date(),
      description: "Test description 2",
    },
  ];

  res.render("articles/index", { articles }); //when we call res.render("index"), Express automatically looks for an "index" file with the appropriate extension (.ejs in this case) inside the "views" directory.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
