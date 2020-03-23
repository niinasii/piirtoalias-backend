const Pool = require('pg').Pool;
const debug = require('debug')('piirtoalias-backend:pgdao');
// require('dotenv').config();

// const USER = process.env.PGUSER;
// const PASSWORD = process.env.PGPASSWORD;

const conopts = {
    user: 'postgres',
    password: 'alias4!',
    host: '',
    database: 'postgres',
    port: 5432
}
//console.log(process.env.DB_CONNECTIONSTRING)
const pool = new Pool(conopts);

process.on('exit', () => {
    debug("\n\n*** Ending pool when exiting");
    pool.end();
});

//get all   
// const getAll = (cb) => {
//     pool.query('SELECT * from topics', (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rows);
//     })
// }

// const getOne = (id, cb) => {
//     pool.query('SELECT * FROM topics WHERE id = $1', [id], (err, results) => {
//         if (err) throw err;
//         console.dir(results.rows);
//         cb(results.rows);
//     })
// }
// const createOne = (newtopic, cb) => {
//     const { title, description, timetomaster, timespent, source, startdate, inprogress, completiondate } = newtopic;
//     pool.query('INSERT INTO topics (title, description, timetomaster, timespent, source, startdate, inprogress, completiondate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
//     [title, description, timetomaster, timespent, source, startdate, inprogress, completiondate], (err, results) => {
//         if (err) throw err; 
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }

// const updateOne= (topic, id, cb) => {
//     const { title, description, timetomaster, timespent, source, startdate, inprogress, completiondate } = topic;
//     pool.query('UPDATE topics SET title = $1, description = $2, timetomaster = $3, timespent = $4, source = $5, startdate = $6, inprogress = $7, completiondate = $8 WHERE id = $9', 
//     [title, description, timetomaster, timespent, source, startdate, inprogress, completiondate, id], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }

// const deleteOne = (id, cb) => {
//     pool.query('DELETE FROM topics WHERE id = $1', [id], (err, results) => {
//         if (err) throw err;
//         console.dir(results);
//         cb(results.rowCount);
//     })
// }


module.exports = { getAll, getOne, createOne, updateOne }
