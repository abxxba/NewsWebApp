const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: { type: String },
  url: { type: String }
});
const Sourcemodel = mongoose.model("source", sourceSchema);

module.exports = Sourcemodel;
