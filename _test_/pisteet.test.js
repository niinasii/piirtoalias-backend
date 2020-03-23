const supertest = require('supertest');
const app = require('../app');
const baseurl = '/api/piirtoalias';

test('Saamme haettua getillä käyttäjien maximi pisteet', (done) => {
    supertest(app)
        .get(baseurl+'/pisteet')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(5); //testidata on viiden käyttäjän maximipisteet
            done();
        })
});

test('Saamme haettu yhden käyttäjän kaikki pisteet', (done) => {
    supertest(app)
        .get(baseurl+'/pisteet/testaaja') //testikäyttäjän tunnus
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});