let express = require('express');
let router = express.Router();
const { API_KEY } = process.env;
console.log(API_KEY);
router.get('/', function (req, res, next) {
  res.send(API_KEY);
});

module.exports = router;
