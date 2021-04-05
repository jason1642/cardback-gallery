var express = require('express');
var router = express.Router();
// const { API_KEY } = process.env;

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(process.env.API_KEY);
  res.send(process.env.API_KEY);
});

module.exports = router;
