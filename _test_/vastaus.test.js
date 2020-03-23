const supertest = require('supertest');
const app = require('../app');
const baseurl = '/api/piirtoalias';

test('Saamme haettua arvattavan sanan tietokannasta', (done) => {
    supertest(app)
        .get(baseurl+'/arvattavasana')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});