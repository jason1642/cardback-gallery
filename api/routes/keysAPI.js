require('dotenv').config();

let express = require('express');
let router = express.Router();
const passport = require('passport');
const session = require('express-session');
const BnetStrategy = require('passport-bnet').Strategy;
const app = express();

const { API_KEY, BLIZZARD_API_KEY, BNET_ID, BNET_SECRET } = process.env;
// console.log(API_KEY);
router.get('/keysAPI', function (req, res, next) {
  // console.log(req);
  // axios
  //   .request({
  //     method: 'post',
  //     url:
  //       'https://us.battle.net/oauth/token?client_id=45f1d1861db249238e553034fc29a8b2&client_secret=Kno5gqGPHEbB7fmz4bJoUMESJFD6uBpz&grant_type=client_credentials',
  //     // grant_type: 'client_credentials',
  //     // client_id: '45f1d1861db249238e553034fc29a8b2',
  //     // client_secret: 'Kno5gqGPHEbB7fmz4bJoUMESJFD6uBpz',
  //   })
  //   .then(ele => console.log(ele.data.access_token));
  // console.log('backend console');

  res.send({
    apiKey: API_KEY,
    blizzardApiKey: BLIZZARD_API_KEY,
    bnetId: BNET_ID,
    bnetSecret: BNET_SECRET,
  });

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
