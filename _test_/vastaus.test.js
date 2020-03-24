const app = require('../app');
const supertest = require('supertest');
const request = supertest(app)
const baseurl = '/words';

describe('Sanojen haku onnistuu kannasta', () => {

    it('saa haettua kaikki sanat tietokannasta', async (done) => {
        const response = await request.get(baseurl + '/')
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(35); //testidatan koko on 35
        done();
    });

    it('saa haettua yhden sanan tietokannasta', async (done) => {
        const response = await request.get(baseurl + '/2') //hakee sanan jonka id on 2
        expect(response.statusCode).toBe(200);
        expect(response.body.word).toContain('ampua');
        done();
    });
});

