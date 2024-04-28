import express from "express";
import { Article } from "./../models/articleModel.js";
import { createArticle } from "./../controllers/articleController.js";
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});

router.get("/", (req, res) => {
  // res.render("articles/new");
  res.send("this is article");
});

router.post("/create", createArticle);

export default router;

// module.exports = router;
