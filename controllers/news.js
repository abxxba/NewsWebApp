const path = require("path");
const multer = require("multer");
const sharp = require("sharp");
const NewsModel = require("../model/news");
const config = require("config");

//MULTER SETUP
//SET STORAGE ENGINE
storage = multer.diskStorage({
  destination: "./public/uploads/temp/",
  filename: function(req, file, cb) {
    cb(
      null,

      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
//INITIALIZE UPLOAD
upload = multer({
  storage: storage,
  limits: { fileSize: config.MaxImgeSize },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("image");

//CHECK FILE TYPE
checkFileType = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  //check ext
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  //check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
};

uploadForAllSize = async (req, res) => {
  let largeImageReturned = null;
  let mediumImageReturned = null;
  let smallImageReturned = null;
  const done = function(ret, con) {
    con == 0
      ? (largeImageReturned = ret)
      : con == 1
      ? (mediumImageReturned = ret)
      : con == 2
      ? (smallImageReturned = ret)
      : null;

    if (
      largeImageReturned != null &&
      mediumImageReturned != null &&
      smallImageReturned != null
    ) {
      const imagePath = {};
      imagePath.image = {};
      imagePath.image = {
        thumbnail: smallImageReturned,
        medium: mediumImageReturned,
        large: largeImageReturned
      };
      NewsModel.findByIdAndUpdate(
        req.params.id,
        { $set: imagePath },
        { new: true }
      ).then(news => res.json(news));
    }
  };
  /* upload large image */
  uploadImageByPath(
    req,
    res,
    config.ImageLarge_Width,
    config.ImageLarge_Height,
    config._dirLargeImage,
    done,
    config.imageLargeConstant
  );
  /* upload medium image */
  uploadImageByPath(
    req,
    res,
    config.ImageMedium_Width,
    config.ImageMedium_Height,
    config._dirMediumImage,
    done,
    config.imageMediumConstant
  );
  /* upload small image */
  uploadImageByPath(
    req,
    res,
    config.ImageSmall_Width,
    config.ImageSmall_Height,
    config._dirSmallImage,
    done,
    config.imageSmallConstant
  );
};

uploadImageByPath = async (req, res, width, height, imagePath, done, con) => {
  let image = null;

  await upload(req, res, err => {
    if (err) {
      console.log("err", err);
      //check if the error is  "invalid format"
      if (typeof err == "string") {
        res.json(err);
      } else {
        res.json(err);
      }
    } else {
      //STORING THE PATH TO THE DATABASE

      if (req.file) {
        filename = path.basename(req.file.path);
        sharp(req.file.path)
          .resize(width, height)
          .toFile(
            "./public/uploads/" + imagePath + "/" + filename,
            (err, info) => {
              if (err) console.log("err: ", err);
            }
          );

        if (filename) {
          image = "/public/uploads/" + imagePath + "/" + filename;

          done(image, con);
        }
      }
    }
  });
};

module.exports = {
  uploadImage: async (req, res) => {
    uploadForAllSize(req, res);
  }
};
