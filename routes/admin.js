const express = require("express");
const passport = require("passport");
const router = require("express-promise-router")();
const UserModel = require("../model/user");
const CategoryModel = require("../model/category");
const passportJWT = passport.authenticate("jwt", { session: false });
const JWT = require("jsonwebtoken");
/* rendering routes */
router.get("/admin", (req, res) => {
  res.render("admin/index");
});

module.exports = router;
