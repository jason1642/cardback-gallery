require('dotenv').config();

let express = require('express');
let router = express.Router();
const passport = require('passport');
const session = require('express-session');
const BnetStrategy = require('passport-bnet').Strategy;
const app = express();
const axios = require('axios');

const { API_KEY, BLIZZARD_API_KEY, BNET_ID, BNET_SECRET } = process.env;
// console.log(API_KEY);

router.get('/', function (req, res, next) {
  // console.log(req);
  axios
    .request({
      method: 'post',
      url: `https://us.battle.net/oauth/token?client_id=${BNET_ID}&client_secret=${BNET_SECRET}&grant_type=client_credentials`,
      // grant_type: 'client_credentials',
      // client_id: '45f1d1861db249238e553034fc29a8b2',
      // client_secret: 'Kno5gqGPHEbB7fmz4bJoUMESJFD6uBpz',
    })
    .then(async ele =>
      res.send({
        apiKey: API_KEY,
        blizzardApiKey: BLIZZARD_API_KEY,
        blizzardToken: ele.data.access_token,
      })
    );
  // console.log('backend console');

  // const response = passport.use(
  //   new BnetStrategy(
  //     {
  //       clientID: BNET_ID,
  //       clientSecret: BNET_SECRET,
  //       callbackURL: 'https://localhost:9000/oauth/battlenet/callback',
  //       region: 'us',
  //     },
  //     function (accessToken, refreshToken, profile, done) {
  //       console.log('accessToken');
  //       return done(null, profile);
  //     }
  //   )
  // );
  // passport.authenticate('bnet', { failureRedirect: '/' }),
  //   res.send(response._strategies.bnet);
});

module.exports = router;
