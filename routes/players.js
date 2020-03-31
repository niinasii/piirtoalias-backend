var express = require('express');
var router = express.Router();
var dao = require('../services/daoservice');

// Haetaan kaikki pelaajat kannasta
router.route('/players')
  .get(function (req, res, next) {
    dao.getPlayers(rows => {
      res.json(rows);
    });
  })

//Lisätään uusi pelaaja kantaan, jolla on id, socketid ja piirtovuoro true/false
  .post(function (req, res, next) {
    dao.insertPlayer(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Inserted' });
      else {
        res.status(400).json({ message: 'Failed to insert' });
      }
    });
  })

//Haetaan se pelaaja jonka piirtovuoro on true
router.route('/players/:id')
  .get(function (req, res, next) {
    dao.getPlayer(req.params.id, (rows) => {
      res.json(rows);
    });
  })

//Päivitetään piirtovuorossa olevan pelaajan vuorostatus truesta falseksi kun vuoro vaihtuu
  .put(function (req, res, next) {
    dao.updatePlayer(req.body, req.params.id, (rowCount) => {
      if (rowCount > 0)
        res.status(200).json({ message: 'Updated' });
      else {
        res.status(400).json({ message: 'Failed to update' });
      }
    });
  })

//poistetaan pelaaja kannasta, kun hän kirjautuu ulos ja sulkee siten socketinsa.
  .delete(function (req, res, next) {
    dao.deletePlayer(req.params.id, (rowCount) => {
      if (rowCount > 0)
        res.status(200).json({ message: 'Deleted' });
      else {
        res.status(400).json({ message: 'Failed to delete' });
      }
    });
  });

module.exports = router;