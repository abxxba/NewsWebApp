const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const categorySchema = new Schema({
  name: {
    type: String
  },
  icon: { type: String }
});
const Categorymodel = mongoose.model("category", categorySchema);

module.exports = Categorymodel;
