const express = require("express");
const passport = require("passport");
const router = require("express-promise-router")();
const passportJWT = passport.authenticate("jwt", { session: false });
const JWT = require("jsonwebtoken");

router.get("/profile", passportJWT, (req, res) => {
  res.json(req.user);
});
module.exports = router;
