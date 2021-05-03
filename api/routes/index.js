var express = require('express');
var router = express.Router();
// const { API_KEY, BLIZZARD_API_KEY } = process.env;

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // console.log(process.env.API_KEY);
  const { API_KEY, BLIZZARD_API_KEY } = process.env;

  res.send({ apiKey: API_KEY, blizzardApiKey: BLIZZARD_API_KEY });
});

module.exports = router;
