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
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
// const createArticle = catchasync(async (req, res, next) => {
//   const newArticle = await Article.create(req.body);

//   res.status(200).json({
//     status: "success",
//     data: {
//       article: newArticle,
//     },
//   });
// });

const getoneArticle = async (req, res) => {
  try {
    const onearticle = await Article.findById(req.params.id);
    console.log(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        article: onearticle,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await Article.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    // console.log(req.params);
    res.status(200).json({
      status: "success",
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await Article.findOneAndDelete({ slug: req.params.slug });

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export { createArticle, updateArticle, getoneArticle, deleteArticle };
