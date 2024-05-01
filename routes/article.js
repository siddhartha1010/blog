import express from "express";
import {
  createArticle,
  // getArticle,
} from "./../controllers/articleController.js";

import { getArticle, getNewArticle } from "../controllers/viewController.js";
const router = express.Router();

router.post("/create", createArticle);
router.get("/", getArticle);
router.get("/new", getNewArticle);

export default router;

// module.exports = router;
