import { crearDeck } from './usecases/create-deck.js';
import { barajarDeck } from './usecases/deck-shufler.js';
import { pedirCarta } from './usecases/pedir-carta.js';
import { mostrarCarta, mostrarPuntos,dispararMensaje } from './usecases/ui.js';
import { limpiarMesa } from './usecases/clean-table.js';
import {reniciarPuntos} from './usecases/game-state.js'
import {validarTotal} from './usecases/validations.js'
import { aplicarCarta, turnoComputadora } from './usecases/play.js';
import { valorCarta } from './usecases/card-value.js';
import  sumarCartas  from './usecases/sum-card.js';
import {cambiarTurno} from './usecases/turn-change.js'
import{controlador} from './usecases/controller.js'



const gameState = {
    turno: 'jugador',
    jugador: 0,
    computadora: 0
};



const btnPedir = document.querySelector('#pedir-carta'),
      btnDetener = document.querySelector('#detener'),
      btnNuevo = document.querySelector('#nueva-partida');


const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
const mazo = crearDeck(tipos, especiales);
let   deckBarajado = barajarDeck(mazo);



const helpers = {
    aplicarCarta,
    pedirCarta,
    valorCarta,
    sumarCartas,
    mostrarCarta,
    mostrarPuntos,
    dispararMensaje,
    validarTotal,
    turnoComputadora
    
};



btnPedir.addEventListener('click', ( ) => {

    controlador(deckBarajado, gameState,helpers);
});

btnDetener.addEventListener('click', () => {
    cambiarTurno(gameState);
    controlador(deckBarajado, gameState,helpers);
});

btnNuevo.addEventListener('click', () => {
    limpiarMesa(btnDetener, btnPedir);
    reniciarPuntos(gameState);

  


});


