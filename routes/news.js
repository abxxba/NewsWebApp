const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");
const NewsModel = require("../model/news");
const SourceModel = require("../model/source");
const CategoryModel = require("../model/category");
const config = require("config");
const { uploadImage } = require("../controllers/news");

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

/* get single news */
router.get("/inc-view/:id", (req, res) => {
  NewsModel.findByIdAndUpdate(req.params.id).then(news => {
    const views = news.view * 1 + 1;
    news.view = views;
    news.save();
    res.json(news);
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

/* image uploading route */
router.post("/upload-image/:id", (req, res) => {
  try {
    upload(req, res, err => {
      if (err) {
        if (typeof err == "string") {
          res.json(err);
        } else {
          res.json(err);
        }
      } else {
        let image = null;

        if (req.files) {
          let app_url = req.headers.origin;

          filename = path.basename(req.files[0].path);

          var resizer = sharp()
            .resize(600)
            .toFile("public/files/resizedimages/" + filename, (err, info) => {
              console.log("err: ", err);

              console.log("info: ", info);
            });

          const imageSize = (app_url + "/" + req.files[0].path).pipe(resizer);
          console.log("imageSize", imageSize);

          if (filename) {
            image = "public/samll/" + filename;
            res.json(image);
          }
        }
      }
    });
  } catch (err) {
    return res.json({ err: err, message: "File could not upload" });
  }
});

router.post("/add-image/:id", uploadImage);

/* get featured news */
router.get("/featured", (req, res) => {
  NewsModel.find({ isFeatured: true }).then(news => {
    res.json(news);
  });
});

/* get trending news */
router.get("/trending", (req, res) => {
  NewsModel.find({})
    .sort([["view", -1], ["date.created", -1]]) //sorting the highest view to the top of the array
    .limit(10) //limiting viewing products to 10
    .exec((err, trending) => {
      if (err) {
        console.log("err", err);
      } else {
        res.json(trending);
      }
    });
});

module.exports = router;
