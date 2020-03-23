const request = require('supertest');
const app = require('../app');
const baseurl = '/api/piirtoalias';

//-Niina
test('Saamme haettua getillä kaikki kayttajat', (done) => {
    request(app)
        .get(baseurl+'/kayttajat')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});