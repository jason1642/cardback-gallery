require('dotenv').config();

let express = require('express');
let router = express.Router();
const passport = require('passport');
const session = require('express-session');
const BnetStrategy = require('passport-bnet').Strategy;
const app = express();

const { API_KEY, BLIZZARD_API_KEY, BNET_ID, BNET_SECRET } = process.env;
// console.log(API_KEY);
router.get('/', function (req, res, next) {
  const response = passport.use(
    new BnetStrategy(
      {
        clientID: BNET_ID,
        clientSecret: BNET_SECRET,
        callbackURL: 'https://localhost:9000/oauth/battlenet/callback',
        region: 'us',
      },
      function (accessToken, refreshToken, profile, done) {
        console.log('accessToken');
        return console.log('weqwewqewqeqw');
      }
    )
  );
  passport.authenticate('bnet', { failureRedirect: '/' }),
    res.send(response._strategies.bnet);
});

module.exports = router;
