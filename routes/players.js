var express = require('express');
var router = express.Router();
//var dao = require('../services/daoservice');
var sio = require ('../bin/www');

// Arvotaan socketID:t
router.route('/players')
.get(function (req, res, next) {
  sio.laterTrigger(data => {
    res.status(200 || 201).json({ message: 'Nyt vuorossa on ' + vuorossaID})
  })
})


/*
router.route('/players')
  .get(function (req, res, next) {
    dao.getPlayers(rows => {
      res.json(rows);
    });
  })

  .post(function (req, res, next) {
    dao.insertPlayer(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Inserted' });
      else {
        res.status(400).json({ message: 'Failed to insert' });
      }
    });
  })

router.route('/players/:id')
  .get(function (req, res, next) {
    dao.getPlayer(req.params.id, (rows) => {
      res.json(rows);
    });
  })

  .put(function (req, res, next) {
    dao.updatePlayer(req.body, req.params.id, (rowCount) => {
      if (rowCount > 0)
        res.status(200).json({ message: 'Updated' });
      else {
        res.status(400).json({ message: 'Failed to update' });
      }
    });
  })

  .delete(function (req, res, next) {
    dao.deletePlayer(req.params.id, (rowCount) => {
      if (rowCount > 0)
        res.status(200).json({ message: 'Deleted' });
      else {
        res.status(400).json({ message: 'Failed to delete' });
      }
    });
  });
*/

module.exports = router;