import express from "express";
import {
  createArticle,
  updateArticle,
  // getoneArticle,
  deleteArticle,
  // getArticle,
} from "./../controllers/articleController.js";

import {
  getArticle,
  getNewArticle,
  getOneArticle,
  editArticle,
} from "../controllers/viewController.js";
const router = express.Router();

router.post("/create", createArticle);
router.get("/", getArticle);
// router.route("/:id").get(getOneArticle);
router.get("/new", getNewArticle);
router.get("/article/:slug", getOneArticle);
// router.route("/:id").get(getoneArticle);
router.route("/:slug").patch(updateArticle);
router.route("/article/:slug").delete(deleteArticle);
router.route("/edit/:slug").get(editArticle);

export default router;

// module.exports = router;
