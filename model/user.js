const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google", "facebook"],
    required: true
  },
  google: {
    name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    image: {
      type: String
    },
    id: {
      type: String
    }
  },
  facebook: {
    name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    image: {
      type: String
    },
    id: {
      type: String
    }
  }
});

const Usermodel = mongoose.model("user", userSchema);

module.exports = Usermodel;
