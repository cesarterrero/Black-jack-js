export const controlador = (deckBarajado, gameState,helpers) => {

    const { aplicarCarta, turnoComputadora } = helpers;

    if (gameState.turno === 'jugador') {
        aplicarCarta(deckBarajado, gameState, 'jugador', helpers);

        if (gameState.jugador > 21) {
            gameState.turno = 'computadora';
            turnoComputadora(deckBarajado, gameState, helpers);
        }
        return;
    };

    if (gameState.turno === 'computadora') {
        turnoComputadora(deckBarajado, gameState, helpers);
    };
};
