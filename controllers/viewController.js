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

const getOneArticle = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });

  res.status(200).render("view", {
    article,
  });
};

export { getArticle, getNewArticle, getOneArticle };
