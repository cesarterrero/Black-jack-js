
 
export  const limpiarMesa = (btnDetener,btnPedir ) => {
    document.querySelector('#jugador-cartas').innerHTML = '';
    document.querySelector('#jugador').innerText = '';
    document.querySelector('#computadora').innerText = '';
    document.querySelector('#computadora-cartas').innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    

}
