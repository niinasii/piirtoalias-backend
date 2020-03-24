## Johdanto
Tämä Github repositio on Piirtoalias-projektin back-end development-vaiheen ulkoinen repositio.

## Kuinka aloitat
Kloonaa itsellesi tämä repo Git Bashissa komennolla:

### `git clone https://github.com/niinasii/piirtoalias-backend `

Installoi tarvittavat riippuvuudet ja generoi node_modules NodeJs:ssä komennolla:

### `npm install`

Käynnistä palvelin komennolla:

### `npm start`

Palvelin pyörii oletusarvoisesti portissa 3000 <br />
Avaa: (http://localhost:3000)

## Testaus

Back-End puolta voidaan testata yhdellä test suitella (Jest + supertest). Expected vastaus pohjaa testidataan, joka sijaitsee AWS RDS tietokannassa.

### `npm test`

## Front-End

Tämän back-end repon front-end vastinkappale on ulkoisessa repossa:
(https://github.com/niinasii/piirtoalias-frontend)

## Tiimi
Niina Siitari, Marjut Kinnari, Jaakko ja Suvi.
