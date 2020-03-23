var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var scoresRouter = require('./routes/scores');
var wordsRouter = require('./routes/words');
var aliasRouter = require('./routes/piirtoalias');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/scores', scoresRouter);
app.use('/words', wordsRouter);
app.use('/api/piirtoalias', aliasRouter);

module.exports = app;
