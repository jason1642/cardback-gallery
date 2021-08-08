require('dotenv').config();

const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const BnetStrategy = require('passport-bnet').Strategy;
const app = express();
const axios = require('axios');


// router.param('id', (req, res, next, val) => {
//   console.log(`This is a text ${val}`);
//   next();
// });

router.get('/:id', (req, res, next) => {
  res.send({myResponse: 'string is a response here'});
  next()
});

module.exports = router;