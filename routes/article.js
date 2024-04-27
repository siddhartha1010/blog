import express from "express";
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});

router.get("/", (req, res) => {
  // res.render("articles/new");
  res.send("this is article");
});

export default router;
// module.exports = router;
