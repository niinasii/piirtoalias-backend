// require('dotenv').config();
const Pool = require('pg').Pool;
const debug = require('debug')('piirtoalias-backend:pgdao');

var sio = require('../bin/www')
var arpoa = require('./arpomisfunktio')

// const USER = process.env.PGUSER;
// const PASSWORD = process.env.PGPASSWORD;

const conopts = {
    user: 'postgres',
    password: 'piirrustus',
    host: 'aliasdb.crhrxstner7x.eu-central-1.rds.amazonaws.com',
    database: 'postgres',
    port: 5432
}
//console.log(process.env.DB_CONNECTIONSTRING)
const pool = new Pool(conopts);

process.on('exit', () => {
    debug("\n\n*** Ending pool when exiting");
    pool.end();
});

//Suvi
//hakee kaikki sanat
const getAllWords = (cb) => {
    pool.query('SELECT * from words', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}
//hakee pelaajien pistemäärät
const getAllScores = (cb) => {
    pool.query('SELECT * from scores', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

// Niina
// Haetaan kaikki pelaajat kannasta
//mitä varten? Listauspelaaja komponenttia varteko?
const getPlayers = (callback) => {
    pool.query("SELECT * from players", (error, data) => {
        if (error) throw error;
        console.dir(data);
        callback(data.rows);
    })
}

//Haetaan yksi pelaaja id:n perusteella kannasta
//pitäisikö olla turn arvon perusteella? haetaanko jos turn on true (eli piirtovuorossa oleva).
//tällöin yksittäinen pelaaja haetaan kannasta kun edellinen vuoro on päättynyt ja uusi vuoro on päivitetty kantaan
const getPlayer = (id, callback) => {
    pool.query("SELECT * FROM players where id =$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rows);
    })
}

let sokettiID = sio.socketid
let vuorostatus = arpoa.result //antaa statukseksi alustavasti false eli ei vuorossa

//Lisätään uusi pelaaja kantaan, kanta generoi id, mutta socketid pitää saada clientista
//mistä saadaan turn arvo false/true ja mikä lähtöarvo? Sijaitsee turn arvon antamisen logiikkaa clientissa vai bäckissä?
const insertPlayer = (newplayer, callback) => {
    const { socketid = sokettiID, turn = vuorostatus } = newplayer; // tuloksena pitää olla newplayer.socketid = value ja newplayer.turn = value
    pool.query("INSERT INTO players (socketid, turn) VALUES ($1, $2)", [socketid, turn], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

//päivitetään pelaajan tiedot kannassa
//ainoastaan turn(false/true) sarake (mutta koska put, niin kaikki sarakkeet pitää ilmoittaa ilmeisesti?)
//Päivitetään piirtovuorossa olevan pelaajan vuorostatus truesta falseksi kun vuoro vaihtuu
const updatePlayer = (player, id, callback) => {
    const { socketid, turn } = player;
    pool.query("UPDATE players SET socketid=$1, turn=$2", [socketid, turn, id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

//käyttäjä deletoidaan kannasta, kun hän kirjautuu ulos ja sulkee socketinsa.
const deletePlayer = (id, callback) => {
    pool.query("DELETE FROM player WHERE id=$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

module.exports = { getAllWords, getAllScores, getPlayers, getPlayer, insertPlayer, updatePlayer, deletePlayer }
