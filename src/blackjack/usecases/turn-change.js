export const cambiarTurno = (gameState) => {
    gameState.turno =
        gameState.turno === 'jugador'
            ? 'computadora'
            : 'jugador';
};