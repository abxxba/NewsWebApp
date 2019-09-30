const mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google", "facebook"],
    required: true
  },
  local: {
    name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    }
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
  },
  isActive:{
    type:Boolean,
    default:true
  }
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
const Usermodel = mongoose.model("user", userSchema);

module.exports = Usermodel;
