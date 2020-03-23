var express = require('express');
var router = express.Router();
const dao = require('../services/daoservice');

router.get('/', function (req, res, next) {
  //   res.send('Ja yhteys on!');
  dao.getAllWords((rows) => {
    res.json(rows);
  })
});

router.get('/:id', function (req, res, next) {
  dao.getOneWord(req.params.id, (rows) => {
    res.json(rows[0]);
  })
})


module.exports = router;