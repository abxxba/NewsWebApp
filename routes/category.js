const express = require("express");
const router = express.Router();
const NewsModel = require("../model/news");
const SourceModel = require("../model/source");
const CategoryModel = require("../model/category");

/* category get route */

router.get("/categories", (req, res) => {
  CategoryModel.find({}).then(categories => {
    res.json(categories);
  });
});

/* category post route */

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
