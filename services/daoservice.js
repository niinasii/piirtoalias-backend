require('dotenv').config();
const Pool = require('pg').Pool;
const debug = require('debug')('piirtoalias-backend:pgdao');
const USER = process.env.PGUSER;
const PASSWORD = process.env.PGPASSWORD;

const conopts = {
    user: USER,
    password: PASSWORD,
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

//hakee kaikki sanat
const getAllWords = (cb) => {
    pool.query('SELECT * from words', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}
//hakee kaikki pelaajat ja heidän pistemääränsä
const getAllScores = (cb) => {
    pool.query('SELECT * from scores', (err, results) => {
        if (err) throw err;
        console.dir(results);
        cb(results.rows);
    })
}
//hakee yden pelaajan ja hänen pisteet id:n perusteella ---> tarvitsee id:n
// const getOneScore = (id, cb) => {
//     pool.query('SELECT * FROM scores WHERE id = $1', [id], (err, results) => {
//         if (err) throw err;
//         console.dir(results.rows);
//         cb(results.rows);
//     })
// }


module.exports = { getAllWords, getAllScores }

