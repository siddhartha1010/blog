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
} from "../controllers/viewController.js";
const router = express.Router();

router.post("/create", createArticle);
router.get("/", getArticle);
// router.route("/:id").get(getOneArticle);
router.get("/new", getNewArticle);
router.get("/article/:slug", getOneArticle);
// router.route("/:id").get(getoneArticle);
router.route("/:id").patch(updateArticle);
router.route("/:id").delete(deleteArticle);

export default router;

// module.exports = router;
