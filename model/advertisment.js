const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sourceSchema = new Schema({
  priority: { String },
  image: { String },
  text: { String }
});
const Sourcemodel = mongoose.model("source", sourceSchema);

module.exports = Sourcemodel;
