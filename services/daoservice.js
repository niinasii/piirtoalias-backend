const Pool = require('pg').Pool;
const debug = require('debug')('piirtoalias-backend:pgdao');
// require('dotenv').config();

// const USER = process.env.PGUSER;
// const PASSWORD = process.env.PGPASSWORD;

const conopts = {
    user: 'postgres',
    password: 'piirrustus',
    host: 'aliasdb.crhrxstner7x.eu-central-1.rds.amazonaws.com',
    database: 'aliasdb',
    port: 5432
}
//console.log(process.env.DB_CONNECTIONSTRING)
const pool = new Pool(conopts);

process.on('exit', () => {
    debug("\n\n*** Ending pool when exiting");
    pool.end();
});

const getAllWords = (cb) => {
    pool.query('SELECT * from words', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

const getOneWord = (id, cb) => {
    pool.query('SELECT * FROM words WHERE id = $1', [id], (err, results) => {
        if (err) throw err;
        console.dir(results.rows);
        cb(results.rows);
    })
}

const getAllScores = (cb) => {
    pool.query('SELECT * from scores', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}

const getOneScore = (id, cb) => {
    pool.query('SELECT * FROM scores WHERE id = $1', [id], (err, results) => {
        if (err) throw err;
        console.dir(results.rows);
        cb(results.rows);
    })
}

module.exports = { getAllWords, getOneWord, getAllScores, getOneScore }
