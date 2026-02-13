export const barajarDeck = (deck) => {

    deck = [...deck.sort(() => Math.random() - 0.5)];

    return deck;

};