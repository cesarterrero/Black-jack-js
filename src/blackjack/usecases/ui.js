export const mostrarCarta = (carta, turno) => {



    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/resource/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    document.querySelector(`#${turno}-cartas`).append(imgCarta);

};


export const mostrarPuntos = (puntos, turno) => {



    const divPuntos = document.querySelector(`#${turno}`);


    divPuntos.innerText = puntos;

};


export const dispararMensaje = (validacion) => {
    if (validacion) {


        alert('ganaste');

    } else {
        alert('perdiste');
    }

};
