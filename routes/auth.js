const express = require("express");
const passport = require("passport");
const router = require("express-promise-router")();
const { JWT_SECRET } = require("../config/jwt");
const JWT = require("jsonwebtoken");
const Usermodel = require("../model/user");
const passportSignIn = passport.authenticate("local", { session: false });

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

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  //check if email already exists
  Usermodel.findOne({ "local.email": email }).then(user => {
    if (user) {
      console.log("user", user);
      return res.status(403).json({ error: "The email is already exist" });
    } else {
      /* Encrypt user password */
      const newUserInstance = new Usermodel();
      const encPassword = newUserInstance.encryptPassword(password);

      //create a new user
      const newUser = new Usermodel({
        method: "local",
        local: {
          name: name,
          email: email,
          password: encPassword
        }
      });
      newUser.save();

      //Generate the token
      const token = signToken(newUser);

      //Respond with token
      res.status(200).json({ token });
    }
  });
});

router.post("/signin", passportSignIn, (req, res) => {
  //token create
  const token = signToken(req.user);
  res.status(200).json({ token });
});

router.post(
  "/oath/google",
  passport.authenticate("googleToken", { session: false }),
  (req, res) => {
    //generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  }
);

router.post(
  "/oath/facebook",
  passport.authenticate("facebookToken", { session: false }),
  (req, res) => {
    const token = signToken(req.user);
    console.log("token", token);
    res.status(200).json({ token });
  }
);
module.exports = router;
