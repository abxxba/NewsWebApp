const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const GoogleTokenStrategy = require("passport-google-id-token");
const FacebookTokenStrategy = require("passport-facebook-token");
const { JWT_SECRET } = require("./jwt");
const User = require("../model/user");
const config = require("config");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await Usermodel.findById(payload.sub);

        if (!user) {
          return done(null, false);
        }

        //return user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  "googleToken",
  new GoogleTokenStrategy(
    {
      clientID: config.clientID
    },
    function(parsedToken, googleId, done) {
      try {
        /* if user already exists */
        User.findOne({ "google.id": googleId }, function(err, user) {
          return done(err, user);
        });

        //create new account
        const newUser = new User({
          method: "google",
          google: {
            name: parsedToken.payload.name,
            id: googleId,
            email: parsedToken.payload.email,
            image: parsedToken.payload.picture
          }
        });
        newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
/* // google Strategy
passport.use(
  "googleToken",
  new GooglePlusTokenStrategy(
    {
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      passReqToCallback: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("wssa");
        //check if user is already exists
        const checkUserexist = await Usermodel.findOne({
          "google.id": profile.id
        });
        if (checkUserexist) {
          return done(null, checkUserexist);
        }

        //create new account
        const newUser = new Usermodel({
          method: "google",
          google: {
            name: profile.displayName,
            id: profile.id,
            email: profile.emails[0].value
          }
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
); */

/* passport.use(
  "facebookToken",
  new FacebookTokenStrategy(
    {
      clientID: config.FbClientID,
      clientSecret: config.FbClientSecret
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const checkUserexist = await Usermodel.findOne({
          "facebook.id": profile.id
        });
        if (checkUserexist) {
          return done(null, checkUserexist);
        }
        const newUser = new Usermodel({
          method: "facebook",
          facebook: {
            name: profile.displayName,
            id: profile.id,
            email: profile.emails[0].value
          }
        });

        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
); */
