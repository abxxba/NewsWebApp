const express = require("express");
const passport = require("passport");
const router = require("express-promise-router")();
const UserModel = require("../model/user");
const passportJWT = passport.authenticate("jwt", { session: false });
const JWT = require("jsonwebtoken");

router.get("/profile", passportJWT, (req, res) => {
  console.log("User Sucessfully Authenticated With JWT");
  return res.json(req.user);
});
router.get("/test", (req, res) => {
  res.json("wssa");
});
router.get("/logout", passportJWT, (req, res) => {
  const sate = { isActive: false };
  UserModel.findByIdAndUpdate(
    req.user._id,
    { $set: state },
    { new: true }
  ).then(user => res.json(user));
});

module.exports = router;
