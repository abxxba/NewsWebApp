const express = require("express");
const passport = require("passport");
const router = require("express-promise-router")();
const { JWT_SECRET } = require("../config/jwt");
const JWT = require("jsonwebtoken");

const passportservice = require("../config/passport");

signToken = user => {
  return JWT.sign(
    {
      iss: "newssec",
      sub: user.id,
      iat: new Date().getTime()
    },
    JWT_SECRET
  );
};

router.post(
  "/oath/google",
  passport.authenticate("googleToken", { session: false }),
  (req, res) => {
    //generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  }
);

router.post("/oath/facebook", (req, res) => {
  res.json("wssa fb");
});
module.exports = router;
