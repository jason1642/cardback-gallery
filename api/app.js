require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const BnetStrategy = require('passport-bnet').Strategy;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const keysRouter = require('./routes/keysAPI');

const app = express();
const { API_KEY } = process.env;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/keysapi', keysRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// const buildFolder = '../frontend/build';
app.get('/oauth/battlenet', (req, res) => {
  passport.authenticate('bnet');
  console.log('21231eqwqwe');
});
app.get(
  '/oauth/battlenet/callback',
  passport.authenticate('bnet', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
