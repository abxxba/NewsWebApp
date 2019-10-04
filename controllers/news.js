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
  /* upload large image */
  uploadImageByPath(
    req,
    res,
    config.ImageLarge_Width,
    config.ImageLarge_Height,
    config._dirLargeImage
  );
  /* upload medium image */
  uploadImageByPath(
    req,
    res,
    config.ImageMedium_Width,
    config.ImageMedium_Height,
    config._dirMediumImage
  );
  /* upload small image */
  uploadImageByPath(
    req,
    res,
    config.ImageSmall_Width,
    config.ImageSmall_Height,
    config._dirSmallImage
  );
};

uploadImageByPath = async (req, res, width, height, imagePath) => {
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
      let image = null;

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
          const news = NewsModel.findById(req.params.id);
          console.log("news", image);
        }
      }
    }
  });
};

module.exports = {
  uploadImage: async (req, res) => {
    uploadForAllSize(req, res);
    res.json("uploaded suceessfully!");
  }
};
