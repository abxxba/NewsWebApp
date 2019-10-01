const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;
const newsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    thumbnail: { type: String },
    medium: { type: String },
    large: { type: String }
  },
  video: {
    youtubeid: { type: String },
    url: { type: String }
  },
  date: {
    created: { type: Date },
    modified: { type: Date }
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  view: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "source"
  },
  advertisment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "advertisment"
  }
});

const Newsmodel = mongoose.model("news", newsSchema);

module.exports = Newsmodel;
