const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const Localstrategy = require("passport-local").Strategy;
const Usermodel = require("../model/user");
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
        const user = await User.findById(payload.sub);

        if (!user) {
          return done(null, false);
        }
        //return user
        console.log("user JWT Passprt", user);
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

// facebook strategy:

passport.use(
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
            email: profile.emails[0].value,
            image: profile.photos[0].value
          }
        });

        await newUser.save();
        console.log("newUser", newUser);
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
//Local Strategy
passport.use(
  new Localstrategy(
    {
      usernameField: "email"
    },
    (email, password, done) => {
      try {
        //find the user with this eamil
        Usermodel.findOne({ "local.email": email }).then(user => {
          console.log("user.password", password);
          if (!user || !user.validPassword(password)) {
            console.log("user", password);
            return done(null, false, {
              errors: { "email or password": "is invalid" }
            });
          }

          return done(null, user);
        });
      } catch (error) {
        done(error, false);
      }
    }
  )
);
