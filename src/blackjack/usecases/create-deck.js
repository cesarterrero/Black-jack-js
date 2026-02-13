export const crearDeck = ( tiposDeCartas, TiposEspeciales) => {

let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }

    for (let esp of TiposEspeciales) {
        for (let tipo of tiposDeCartas) {
            deck.push(esp + tipo);
        }
    }


    return deck;

};