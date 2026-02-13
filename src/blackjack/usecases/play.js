export const aplicarCarta = (deck, gameState, turno, helpers) => {
    const { pedirCarta, valorCarta, sumarCartas, mostrarCarta, mostrarPuntos } = helpers;

    const carta = pedirCarta(deck);
    const valor = valorCarta(carta);

    gameState[turno] = sumarCartas(valor, gameState[turno]);

    mostrarCarta(carta, turno);
    mostrarPuntos(gameState[turno], turno);
};


export const turnoComputadora = (deck, gameState, helpers) => {

  const { dispararMensaje, validarTotal } = helpers;

    if (gameState.turno !== 'computadora') return;

    while (
        gameState.computadora < gameState.jugador &&
        gameState.computadora <= 21
    ) {
        aplicarCarta(deck, gameState, 'computadora', helpers);
    }

    setTimeout(() => {
        dispararMensaje(
            validarTotal(gameState.jugador, gameState.computadora)
        );
    }, 100);
};