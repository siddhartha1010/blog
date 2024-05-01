import { Article } from "./../models/articleModel.js";

const createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        article: newArticle,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export { createArticle };
