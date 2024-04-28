import { Article } from "./../models/articleModel.js";

const createArticle = async (req, res) => {
  try {
    //   console.log(req.body);
    //   const article = new Article({
    //     title: req.body.title,
    //     description: req.body.description,
    //     markdown: req.body.markdown,
    //   });
    const newArticle = await Article.create(req.body);
    res.status(200).json({
      status: "Success",
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
