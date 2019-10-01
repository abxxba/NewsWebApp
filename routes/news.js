const express = require("express");
const router = express.Router();
const NewsModel = require("../model/news");
const SourceModel = require("../model/source");
const CategoryModel = require("../model/category");

/* get news */
router.get("/", (req, res) => {
  NewsModel.find({})
    .sort([["date.created", -1]])
    .populate("source")
    .populate("category")
    .exec((err, news) => {
      if (err) {
        console.log("err", err);
        res.status(500).json("sorry something went wrong");
      } else {
        res.json(news);
      }
    });
});
/* post route for news */
router.post("/", (req, res) => {
  /* TODO: VALIDATION */

  const newsFields = {};

  if (req.body.title) newsFields.title = req.body.title;
  if (req.body.description) newsFields.description = req.body.description;
  if (req.body.isFeatured) newsFields.isFeatured = true;

  /* VIDEO FIELDS */
  newsFields.video = {};
  if (req.body.youtubeid) newsFields.video.youtubeid = req.body.youtubeid;
  if (req.body.url) newsFields.video.url = req.body.url;

  /* DATE FIELDS */
  newsFields.date = {};
  newsFields.date.created = Date.now();

  /* referals */
  if (req.body.source) newsFields.source = req.body.source;
  if (req.body.category) newsFields.category = req.body.category;
  /* SAVE IN TO DATABASE */
  NewsModel.create(newsFields, (err, news) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("sorry something went wrong");
    } else {
      res.json(news);
    }
  });
});
/* source post route */

router.post("/source", (req, res) => {
  const sourceFields = {};
  if (req.body.name) sourceFields.name = req.body.name;
  if (req.body.logo) sourceFields.logo = req.body.logo;
  if (req.body.url) sourceFields.url = req.body.url;

  /* SAVE IN TO DATABSE */

  SourceModel.create(sourceFields, (err, source) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("sorry something went wrong");
    } else {
      res.json(source);
    }
  });
});

/* source post route */

router.post("/category", (req, res) => {
  const categoryFields = {};
  if (req.body.name) categoryFields.name = req.body.name;
  if (req.body.icon) categoryFields.icon = req.body.icon;

  /* SAVE IN TO DATABSE */

  CategoryModel.create(categoryFields, (err, category) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("sorry something went wrong");
    } else {
      res.json(category);
    }
  });
});

module.exports = router;
