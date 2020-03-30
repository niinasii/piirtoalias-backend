/*

Piirtovuoron arvo on tietokannassa boolean, joten arpomisfunktion tuloksena tulis result = true,
eli lähtökohtaisesti kaikilla oli sitten false eli ei vuoroa laisinkaan. 
Arpomisfunktio pitää kutsua ilmeisesti kun 
    1) ensimmäinen henkilö liittyy ja 
    2) saadaan mätchi arvottuun sanaan

Nämä siis if lauseilla
sitten arvottava sana lähetetään privaviestillä 
siihen socket.id jonka arvo on tietokannan mukaan true (eli piirtovuorossa). 

*/

result = false;
module.exports = {result}