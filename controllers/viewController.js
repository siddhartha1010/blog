import { Article } from "./../models/articleModel.js";

const getArticle = async (req, res) => {
  const articles = await Article.find();
  res.status(200).render("index", {
    articles,
  });
};

const getNewArticle = async (req, res) => {
  res.status(200).render("new");
};

export { getArticle, getNewArticle };
