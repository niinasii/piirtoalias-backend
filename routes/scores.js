var express = require('express');
var router = express.Router();
var dao = require('../services/daoservice');

//hakee kaikki pelaajat ja heidän pisteet
router.get('/', function (req, res, next) {
  //   res.send('Ja yhteys on!');
  dao.getAllScores((rows) => {
    res.json(rows);
  })
});


module.exports = router;