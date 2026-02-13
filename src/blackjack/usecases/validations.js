export const validarTotal = ( acumuladorJugador, acumuladorComputadora) => {



    if (acumuladorJugador > 21) {

        return false;

    } else if (acumuladorJugador <= 21 && acumuladorJugador > acumuladorComputadora && acumuladorComputadora > 0) {
        return true;
    }
    else if (acumuladorComputadora > 21) {
        return true;
    }
    else if (acumuladorComputadora <= 21 && acumuladorComputadora > acumuladorJugador && acumuladorJugador > 0) {
        return false;
    }

};