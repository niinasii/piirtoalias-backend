var express = require('express');
var router = express.Router();
const dao = require('../services/daoservice');

//hakee kaikki pelaajat ja heidän pisteet
router.get('/', function (req, res, next) {
  //   res.send('Ja yhteys on!');
  dao.getAllScores((rows) => {
    res.json(rows);
  })
});

// router.get('/:id', function (req, res, next) {
//   dao.getOneScore(req.params.id, (rows) => {
//     res.json(rows[0]);
//   })
// })

// router.post('/', function (req, res, next) {
//   dao.createOne(req.body, (rowCount) => {
//     if (rowCount > 0)
//       res.status(201).json({ message: 'Success, new topic created' });
//     else {
//       res.status(400).json({ message: 'Error' });
//     }
//   })
// })


module.exports = router;